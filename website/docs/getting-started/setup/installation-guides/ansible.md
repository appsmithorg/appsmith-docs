---
description: Deploy Appsmith to a remote host using Ansible
---

# Ansible

## Deployment steps:

* [Install Ansible](ansible.md#step-1-install-ansible)
* [Ansible inventory setup](ansible.md#step-2-ansible-inventory-setup)
* [Ansible configuration vars setup for Appsmith](ansible.md#step-3-ansible-configuration-vars-setup-for-appsmith)
* [Run the Ansible playbook](ansible.md#step-4-run-the-ansible-playbook)

## Step 1: Install Ansible

> You can skip this step if you already have Ansible installed.

There are two options for installing Ansible:

* Option 1: Using OS-specific Package Managers.
  *   To install on Ubuntu, you can run the following commands:

      ```
      $ sudo apt update
      $ sudo apt install software-properties-common
      $ sudo add-apt-repository --yes --update ppa:ansible/ansible
      $ sudo apt install ansible
      ```
  * Please refer to [Ansible's official installation guide](https://docs.ansible.com/ansible/latest/installation\_guide/intro\_installation.html#installing-ansible-on-specific-operating-systems) for other operating systems.
*   Option 2: Using `pip`:

    ```
    $ sudo pip install ansible
    ```

    * If you do not have pip installed on your system, please refer to [Ansible's official guide on installing with pip.](https://docs.ansible.com/ansible/latest/installation\_guide/intro\_installation.html#installing-and-upgrading-ansible-with-pip)

## Step 2: Ansible inventory setup

1.  Clone the Appsmith repository to your machine & move it to the Ansible playbook folder.

    ```
    $ git clone https://github.com/appsmithorg/appsmith.git
    $ cd ./appsmith/deploy/ansible/appsmith_playbook
    ```
2.  Create the `inventory` file.

    ```
        $ touch inventory
    ```
3.  To configure the `inventory` file, open it with your editor and add the hostname or FQDN of the server on which you want to deploy Appsmith, along with the Ansible port and Ansible user.

    The inventory file should follow the given format:

    ```
    appsmith ansible_host={{ SERVER_HOST }} ansible_port={{ SERVER_PORT }} ansible_user={{ SERVER_USER }}
    ```

    If you are using SSH key pairs for authenticating your SSH connections to your server. You can specify your ssh private key file in the `inventory` file using `ansible_ssh_private_key_file`

    ```
    appsmith ansible_host={{ SERVER_HOST }} ansible_port={{ SERVER_PORT }} ansible_user={{ SERVER_USER }} ansible_ssh_private_key_file={{ SSH_PRIVATE_KEY_FILE }}
    ```

## Step 3: Ansible configuration vars setup for Appsmith

1. Open `appsmith-vars.yml` file with your editor.<br/>
Some variables need input from you to start the application correctly.
   * `install_dir`: The absolute path of your app's installation folder on the server (required). Default value: `~/appsmith`

## Step 4: Run the Ansible playbook

You can run the Ansible playbook with the following command:

```
$ ansible-playbook -i inventory appsmith-playbook.yml --extra-vars "@appsmith-vars.yml"
```

The command above uses the host information from the `inventory` file & feeds your configuration vars from `appsmith-vars.yml` before running the playbook

When it's all done, provided all went well and no parameters were changed, you should be able to visit your app on the browser using your `custom_domain` or by your `SERVER_HOST` (if you didn't provide value for `custom_domain` variable)

> **Note**: You can put your `inventory` file in other folder and then specify its path with the `-i` flag, for more detail, please check [Ansible Inventory documentation](https://docs.ansible.com/ansible/latest/user\_guide/intro\_inventory.html)

## Troubleshooting

If you encounter any errors during this process, check out the guide on [debugging deployment errors](/help-and-support/troubleshooting-guide/deployment-errors), if you are still facing an issue please reach out to [support@appsmith.com](mailto:support@appsmith.com)
