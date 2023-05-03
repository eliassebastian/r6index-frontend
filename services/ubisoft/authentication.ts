const UBISOFT_URL       = "https://public-ubiservices.ubi.com/v3/profiles/sessions"
const UBISOFT_APPID     = "3587dcbb-7f81-457c-9781-0e3f29f6f56a"
const UBISOFT_NEWAPPID  = "e3d5ea9e-50bd-43b7-88bf-39794f4e3d40"
const UBISOFT_USERAGENT = "UbiServices_SDK_2020.Release.58_PC64_ansi_static"

type UbisoftResponse = {
	sessionId: string
    ticket: string 
    expiration: string
}

type UbisoftAuthentication = {
    ticket?: string,
    session?: string,
    expiration?: string,
    ticketNew?: string,
    sessionNew?: string,
    expirationNew?: string,
}

class UbisoftAuthenticationProvider {

    private basicToken: string;
    private authentication: UbisoftAuthentication;

    constructor(username: string, password: string) {
        this.basicToken = this.setBasicToken(username, password);
        this.authentication = {}
    };

    private setBasicToken = (username: string, password: string) => {        
        if (username === "" || password === "") {
            throw new Error('invalid username or password not set');
        }

        return Buffer.from(`${username}:${password}`, 'utf-8').toString('base64');
    }

    private authenticateUbisoftCredentials = async (auth: string = "") => {
        const headers = new Headers({
            Connection: 'keep-alive',
            'Content-Type': 'application/json',
            Accept: '*/*',
            'Ubi-AppId': auth === "" ? UBISOFT_APPID : UBISOFT_NEWAPPID,
            Authorization: `${auth === "" ? "Basic" : "Ubi_v1"} ${auth === "" ? this.basicToken : "t=" + auth}`,
        });

        if (auth !== "") {
            headers.append('User-Agent', UBISOFT_USERAGENT);
        }

        const response = await fetch(UBISOFT_URL, {
            method: 'POST',
            headers,
        });
      
        if (!response.ok) {
            return null;
        }

        return await response.json() as UbisoftResponse;
    }

    // 
    authenticateUbisoftCredentialsOld = async () => {
        const response = await this.authenticateUbisoftCredentials();

        if (!response) {
            throw new Error('invalid username or password');
        }

        this.authentication.ticket = response.ticket;
        this.authentication.session = response.sessionId;
        this.authentication.expiration = response.expiration;
    }

    // ubisofts new api endpoint requires a ticket to be generated from the old api
    authenticateUbisoftCredentialsNew = async () => {
        const authTicket = this.authentication.ticket;

        if (!authTicket) {
            throw new Error('authentication ticket does not exist');
        }

        const response = await this.authenticateUbisoftCredentials(authTicket);

        if (!response) {
            throw new Error('invalid username or password');
        }

        this.authentication.ticketNew = response.ticket;
        this.authentication.sessionNew = response.sessionId;
        this.authentication.expirationNew = response.expiration;
    }

    getAuthenticationValues = () => {
        return this.authentication;
    }
}