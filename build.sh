#!/bin/bash

# Change directory to admin
cd admin

# Rsync the .next directory from local to remote server
rsync -avz -e "ssh -i ~/lightsail/LightsailDefaultKey.pem" /home/proud/Github/shaman-ent-website/admin/.next bitnami@13.201.108.252:/home/bitnami/website/admin

# Change directory back to parent
cd ..

# Change directory to store
cd store

# Rsync the .next directory from local to remote server
rsync -avz -e "ssh -i ~/lightsail/LightsailDefaultKey.pem" /home/proud/Github/shaman-ent-website/store/.next bitnami@13.201.108.252:/home/bitnami/website/store