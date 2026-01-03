# docker_swarm

sudo adduser <username>   #creat new user
sudo usermod -aG sudo <username> #ajouter au group sudo

Ansible role to install docker_swarm manager and nodes for TIC-CLO5

Goal of the role:

install Docker on all hosts
Setup Swarm mode on VM4 (manager)
Setup worker mode on VM1 VM2 and VM3
