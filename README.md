# adAuthoApi

setup your tenant id, client id and client secret in config.ts. 

next please run 

- npm run build 
- npm start

then navigate to localhost:3000


Setting up authority as part of the config 

        clientId: "enter your client id ",
        authority: "https://login.microsoftonline.com/common",
        clientSecret: ""

for organization account (not for account like hotmail or skype)
authority: "https://login.microsoftonline.com/common",


If this is your azure subscrption, then u can the following setup
authority: "https://login.microsoftonline.com/enter your tenant id",
