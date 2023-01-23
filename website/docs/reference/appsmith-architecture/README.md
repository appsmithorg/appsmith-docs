# Architecture

Appsmith is simple to deploy on Docker or Kubernetes. Machine images are available for AWS, DigitalOcean, and Heroku.

1. Appsmith Community is available [hosted](http://app.appsmith.com/user/sign-up) and self-hosted.
2. There is little difference between the two ways of using Appsmith, both in features and architecture.
3. The Business Edition is only available on self-hosted instances.
4. Both Community and Business self-hosted instances are deployed as a single Docker container. It requires a single volume for all persistent data.
5. A single line of code gets you started:
    
    ```docker
    docker run -d -p 80:80 -v "$PWD/stacks":/appsmith-stacks appsmith/appsmith-ce
    ```
    
6. Appsmith can be one-click installed from the AMI on the AWS marketplace or from the image on the DigitalOcean Marketplace, both of which wrap around the single Docker container that’s the focus of this post.

## Self-hosted instance architecture

![Appsmith Deployment Architecture](/img/Appsmith_Deployment_Architecture.png)


## How it works

[Explanation of each element in the image and how it works. here we can also make a mention of fat container setup]

The single Docker container runs the following processes to deploy and get started with Appsmith. 


<details>
    <summary>1. The <strong>backend server</strong> as a Java process, which handles:</summary>
    <ul>
        <li>Authentication: username + password, OAuth2 with Google and GitHub, SSO with OIDC and SAML</li>
        <li>A CRUD API
    for users, workspaces, applications, pages, widgets</li>
        <li>An action execution module
    runs your queries to your databases and APIs</li>
        <li>A git module
    maintains clones of your Git-connected apps on the file system</li>
    </ul>
</details>

<details>
<summary>2. The <strong>NGINX server</strong>, which routes:</summary>
    <ul>
        <li>requests to static assets like Javascript, CSS, and images</li>
        <li>incoming requests to the backend server, or the RTS depending on the request path</li>
        <li>path-unidentified requests to an `index.html` page with a 200 status code. This is like a typical single-page application where the client React code is expected to understand the path and show the UI accordingly</li>
    </ul>
</details>

<details>
<summary>3. The <strong>Real Time Service (RTS)</strong>:</summary>
    A tiny NodeJS server that handles a few delight-in-the-details features like mapping dependencies between APIs, queries, and web UI components. It also updates references for all reference-able entities when their names change in Appsmith.
</details>

<details>
<summary>4. The <strong>MongoDB server</strong>, which stores all persistent data:</summary>
    <ul>
        <li>your users’ details and permissions</li>
        <li>workspaces you have created</li>
        <li>applications you are building and have deployed</li>
        <li>datasources you have connected to</li>
        <li>queries that connect those datasources to your apps</li>
        <li>everything else in-between!</li>
    </ul>
</details>

<details>
<summary>5. The <strong>Redis server</strong>:</summary>
Used for storing user sessions and cache permissions a user has access to directly and indirectly.
</details>

## Process management

How do we manage 10,000 new instances per month, per our best guesstimates, to get the kind of love we do?

it’s [Supervisor](http://supervisord.org/), a lightweight process manager, that, when given a list of things to run, will run them, start them again if they crash, and collect their logs so users can send it to us when they do reach out.

When you run the Docker command to start the Appsmith container, we identify the processes that *need* to start and run. For example, if an external MongoDB is not configured, then a MongoDB process will start. The usual suspects always included are the aforementioned backend server, the RTS, and the NGINX server.

For each of these processes, the **container’s entry-point script—the one that Docker invokes when the container starts—generates *a* config file in the format and with the details needed by supervisord. For example, the config file for the backend Java server includes the full command line needed to start this process, any extra environment variables needed, and where the logs need to be saved.

<aside>
⭐ The same entry-point script also helps set up SSL certificates and install custom CA roots.

</aside>

supervisord also comes with a CLI that you can use to control these processes individually. For example, you can run `supervisorctl restart redis` if you want to restart just Redis. In another example, the `Save and Restart` button under `Admin Settings` on the Appsmith UI is powered by this. Hitting that button after you make changes on the UI tells the backend server to executes `supervisorctl restart backend`, which promptly restarts the backend.

### Docker

Appsmith runs as a single Docker container, housing all five processes in one image.



When we rewrote Appsmith to be a single Docker container, our goal was to abstract decisioning away from the first group of users—those that didn’t have a ready MongoDB they wanted to use over the one Appsmith ships with and couldn’t care less for it. Consequently, they didn’t care for inter-process dependencies or how to connect the Appsmith server to MongoDB and Redis.

Luckily, when we released it, users took to the single, nice, gleaming Docker container that installs with one swift line of code and brings up the instance. To them, it squared away distractions of hosting and managing it over time. #BigWin

Speaking of managing, the other advantage of this approach is seamless updates.

- We just upgraded to MongoDB v5 and for most of our users on the shipped-with instance of MongoDB, the upgrade to `v1.9.1` was seamless.
- Hypothetically, if we were to add a new microservice or replace Redis with Memcached, we would do that confidently without asking our users to worry about any change or upgrade on their side.

This design doesn’t exclude users who **do** want their own MongoDB, Redis, or whatever else. The Appsmith container is smart enough to recognize when an external MongoDB or Redis is configured and doesn’t start either process inside the single Docker we ship. You can probably see how the illusion of our image being a FAT container is just that—an illusion or in name only, at best.

### Kubernetes

Why did we add Kubernetes to our list of options?

Aside from the ease of deployment to existing environments and familiarity with Kubernetes amongst our users, the one reason that resonated the most was rolling deployments.

In the cluster of VMs—*nodes* in the Kubernetes world*—*each VM runs one Appsmith container, which is wrapped up in another Kubernetes abstraction called, *pod*.

Say we have three nodes, N1, N2, and N3, each one running Appsmith v1. Then say we want to move to Appsmith v2, which will happen soon, by the way.

1. Kubernetes will pick one node among the three, say, N1.
2. It will stop requests routed to the Appsmith pod running on N1 and bring it down.
3. It will then start a new Appsmith pod on N1 running Appsmith v2.
4. Once this Appsmith pod is up, it will start routing requests to the pod.
5. It will repeat `1.` through `4.` for N2 and N3.

That’s what rolling deployments look like. No downtime, even if only for 20 seconds today. Imagine a situation when something goes belly up with N1. N2 and N3 still take requests and work very well for usual-case scenarios—traffic hasn’t spiked 10X in twenty minutes, as an example.

When unusual cases do come up, we have redundancy. Additionally, there’s also the benefit of elastic scaling because Kubernetes can intelligently bring up more nodes + pods if load increases to levels that the current pods can’t handle anymore and terminate nodes + pods when the load comes back down to baselines.