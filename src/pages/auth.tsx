import * as msal from "@azure/msal-browser";

export const MsalInstance = new msal.PublicClientApplication({
  auth: {
    protocolMode: msal.ProtocolMode.OIDC,
    authorityMetadata: JSON.stringify({
      authorization_endpoint:
        "http://localhost:8080/realms/demo/protocol/openid-connect/auth",
      token_endpoint:
        "http://localhost:8080/realms/demo/protocol/openid-connect/token",
      issuer: "http://localhost:8080/realms/demo",
      userinfo_endpoint:
        "http://localhost:8080/realms/demo/protocol/openid-connect/userinfo",
    }),
    authority: "http://localhost:8080/realms/demo",
    clientId: "demo",
    knownAuthorities: ["http://localhost:8080/realms/demo"],
  },
});
