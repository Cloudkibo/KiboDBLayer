# This script is to restart the server in staging mode.
# This will install all the required libraries.
git pull origin staging
npm install
npm run stop:staging
npm run start:staging
