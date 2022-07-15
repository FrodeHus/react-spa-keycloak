# react-spa-keycloak

Simple example of how to use MSAL with React to authenticate using Keycloak

[Blog post](https://www.frodehus.dev/add-privileged-identity-management-with-keycloak-using-azure-active-directory/)

## Dev environment

Because MSAL requires a HTTPS endpoint, it will not accept authenticating with Keyclock on regular HTTP.

Which is a good practice anyway - start using good security practices as early as possible so you don't forget or have to change many things later.

This is why the `docker-compose.yml` setup is configured to use self-signed certificates (provided for you in the `keycloak-data/certs` directory).

If you wish to create your own certificate, just issue the command (inside the `keycloak-data/certs` directory):

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout keycloak.key -out keycloak.crt -config keycloak-cert.conf -passin pass:YourStrongPassword
```

To get Keycloak up and running: `docker-compose up -d`

This also import a demo realm to get started.

Login with `admin/admin` at <http://localhost:8080/admin>

Run the webapp: `cd src && npm run dev`
