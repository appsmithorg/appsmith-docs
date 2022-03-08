---
description: >-
  Appsmith ships with third-party services & configurations that improve the app
  building experience. All services & configurations are entirely optional.
---

# Instance Configuration

## Configuring Docker Installations

To configure a docker installation, simply open the folder of your installation and edit the **`stacks/configuration/docker.env`** file with the environment variables for the service.

Remove # before the variables to ensure they are not commented

```bash
// Example variable configuration format
APPSMITH_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

After making any changes, **remember to restart the docker containers** for the changes to take affect.

```bash
// To restart Appsmith using docker
docker restart appsmith

// To restart Appsmith using docker compose
docker-compose restart appsmith
```

## Configuring Kubernetes Installations

To configure a k8s installation, simply open the folder of your installation and edit the **`config-template/appsmith-configmap.yaml`** file.

Remove # before the variables to ensure they are not commented

```
// Example variable configuration format
APPSMITH_GOOGLE_MAPS_API_KEY: "YOUR_API_KEY"
```

After making any changes, **remember to restart the pods** for the changes to take affect

```
// commands to restart k8s pods
kubectl apply -f appsmith-configmap.yaml
kubectl scale deployment appsmith-internal-server --replicas=0
kubectl scale deployment appsmith-internal-server --replicas=1
```

## Available Configurations

* [Email](email/)
* [Custom Domain](custom-domain.md)
* [Signup Restrictions](disable-user-signup.md)
* [Google OAuth](google-login.md)
* [GitHub OAuth](github-login.md)
* [Google Maps](google-maps.md)
