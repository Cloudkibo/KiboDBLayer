# This script is to restart the server in staging mode.
# This will install all the required libraries.
git pull origin staging
npm install
forever stop server/app.js
forever cleanlogs
forever start server/app.js
