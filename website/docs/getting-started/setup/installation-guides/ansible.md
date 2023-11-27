---
description: This page provides instructions to deploy Appsmith on a remote host using Ansible.
---

# Ansible

This page provides instructions to install Appsmith on a remote host using Ansible.

## Prerequisites

- Install Ansible on your local machine. See the official Ansible documentation for your [operating system](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.html#installing-ansible-on-specific-operating-systems).
- An Ubuntu server for hosting.

## Install Appsmith

1. Clone the Appsmith repository to your machine with:

   ```bash
   git clone https://github.com/appsmithorg/appsmith.git
   ```

   The above command copies the `appsmith` repository into a `appsmith` folder, which serves as your installation directory.

2. Go to the _ansible_playbook_ folder:
   ```bash
   cd appsmith/deploy/ansible/appsmith_playbook
   ```
3. Create an Ansible inventory file with:

   ```bash
   touch inventory
   ```

   An Ansible inventory file specifies the target hosts you want to manage with Ansible.

4. Open the `inventory` file and add the server details:
   - If you are using an SSH key pair for authenticating your server, then add the hostname or Fully Qualified Domain Name (FQDN), port, and the SSH Key in the below format:
     ```txt
     appsmith ansible_host=<SERVER_HOST> ansible_port=<SERVER_PORT> ansible_user=<SERVER_USER> ansible_ssh_private_key_file=<PATH_TO_SSH_PRIVATE_KEY_FILE>
     ```
   - **Or** if you are using a username to log into your server, then add the hostname or Fully Qualified Domain Name (FQDN), port, and username in the below format:
     ```txt
     appsmith ansible_host=<SERVER_HOST> ansible_port=<SERVER_PORT> ansible_user=<SERVER_USER>
     ```
5. Run the Ansible playbook with:

   If your default installation folder is not `appsmith`, then add the absolute path of your installation folder to the `install_dir` property in the `appsmith-vars.yml` file.

   ```bash
   ansible-playbook -i inventory appsmith-playbook.yml --extra-vars "@appsmith-vars.yml"
   ```

   The command above uses the host information from the `inventory` file and the configuration from the `appsmith-vars.yml` file before running the playbook.

6. Access Appsmith using your custom domain or host. You will see a _Please wait_ screen while the server is starting, which may take up to 5 minutes. Once the server is up and running, you can access Appsmith using your custom domain or host.

## Troubleshooting

If you are facing issues during deployment, please refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors).

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.
