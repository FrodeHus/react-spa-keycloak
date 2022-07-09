import * as msal from "@azure/msal-browser";

export const MsalInstance = new msal.PublicClientApplication({
  auth: {
    protocolMode: msal.ProtocolMode.OIDC,
    authorityMetadata: JSON.stringify({
      authorization_endpoint:
        "https://localhost/realms/demo/protocol/openid-connect/auth",
      token_endpoint:
        "https://localhost/realms/demo/protocol/openid-connect/token",
      issuer: "https://localhost/realms/demo",
      userinfo_endpoint:
        "https://localhost/realms/demo/protocol/openid-connect/userinfo",
    }),
    authority: "https://localhost/realms/demo",
    clientId: "demo",
    knownAuthorities: ["https://localhost/realms/demo"],
  },
});
