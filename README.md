# PM2-AWS

## 1. Terraform creates an EC2 instance with a security group allowing ports 22 and 3000.
## 2. User Data installs Node.js v22.14.0, npm, git, and PM2 during instance launch.
## 3. Git repo is cloned into the instance automatically.
## 4. The' npm install' command runs, and the app is started via PM2 with auto-reboot enabled.
## 5. App is publicly accessible at http://<EC2-IP>:3000 immediately after provisioning.
