# Firebase Import  #

This repo helps to import JSON to Firebase DB

To convert SQL CSV to JSON use https://www.convertcsv.com/csv-to-json.htm


## Config ##

Login into Firebase, go to your project settings, create a web app config, copy and paste the config into the `./config/firebase.js` files

Go to Firebase project service accounts, create a new service account and copy and paste the config into the `./config/service.json` files


## Run  ##

`npm install`

Add json files to data folder and update name in import.js

`node import.js`
