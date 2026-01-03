# Groupe de sadat_g 1040322

## pour encrypt token

ansible-vault encrypt users_gitlab/vars/main.yml

## ansible all -m ping -i inventory/hosts:

VM1 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
VM3 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
VM2 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
VM4 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}