import { LogLevel } from "@azure/msal-node";
import * as msal from "@azure/msal-node";

export const config = {
    auth: {
        clientId: "",
        authority: "https://login.microsoftonline.com/common",
        clientSecret: "Enter_the_Client_Secret_Here"
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel:LogLevel, message:string, containsPii:boolean) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};