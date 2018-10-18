# KiboDBLayer ReadME
## Operations Guide (Production and Staging)

#### Setup Database

You should have MongoDB installed on your system.

#### Setup Nodejs and NPM

You should have Nodejs and NPM installed on your system.

#### Install Forever

To install forever run the following command:

    npm install forever -g

#### Install Git

    sudo apt-get update
    sudo apt-get install git

#### Clone

Now, clone the project:

    git clone https://github.com/Cloudkibo/KiboDBLayer.git

#### Redirect the ports to our application ports
Run following two commands

    iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 5000
    iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 5443

Now on terminal, set the environment variables in /etc/environment.

    nano /etc/environment

We need to set the following variables: (Just copy paste and then change the values)

    PORT=<YOUR PORT>
    IP=<YOUR IP>
    NODE_APP=<APP NAME IN LOWER CASE>
    DOMAIN=<YOUR DOMAIN>
    MONGO_URI=<DATABASE STRING>

Now, run the following command to install dependencies:

    npm install

Now, we need to run deployment_prod for production environment.

    bash deployment_prod.sh

Now, we need to run deployment_staging for staging environment.

    bash deployment_staging.sh

#### MONGODB START FAILURE AT SERVER ( code=exited, status=14 )

Quick Fix

1 — Go to the TMP directory: cd /tmp
2 — Check if you have the mongodb sock file: ls *.sock
3 — Change the user:group permission: chown mongodb:mongodb <YOUR_SOCK>
4 — Start MongoDB: sudo service mongod start
5 — Check the MongoDB status: sudo service mongod status

    NOTE: If there is no sock file, then we won't be running the command to add sock file in mongodb user group.

    <YOUR_SOCK> will be the name of sock file.

    For example, in staging server it is "mongodb-27017.sock"

    You can check the name in "cd /tmp" and then by "running ls *.sock"
