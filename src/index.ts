import * as msal from "@azure/msal-node";
import express from "express";
import { config } from "./config";

const SERVER_PORT = process.env.PORT || 3000;
const REDIRECT_URI: string = "http://localhost:3000/redirect";

// Create msal application object
const pca = new msal.ConfidentialClientApplication(config);

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {

    const authCodeUrlParameters = {
        scopes: ["user.read"],
        redirectUri: REDIRECT_URI,
    };

    // get url to sign user in and consent to scopes needed for application
    pca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
        res.redirect(response);
    }).catch((error) => console.log(JSON.stringify(error)));
});

app.get('/redirect', async (req: express.Request, res: express.Response) => {

    const tokenRequest = {
        code: req.query.code as string,
        scopes: ["user.read"],
        redirectUri: REDIRECT_URI,
    };

    try {
        // this is where we obtain the token from AD //
        const response = await pca.acquireTokenByCode(tokenRequest);
        console.log(response);
        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

app.listen(SERVER_PORT, () => console.log(`Msal Node Auth Code Sample app listening on port ${SERVER_PORT}!`))

