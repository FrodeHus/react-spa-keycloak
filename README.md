# react-spa-keycloak

Simple example of how to use MSAL with React to authenticate using Keycloak

## Dev environment

Because MSAL requires a HTTPS endpoint, it will not accept authenticating with Keyclock on regular HTTP.

Which is a good practice anyway - start using good security practices as early as possible so you don't forget or have to change many things later.

This is why the `docker-compose.yml` will run a nginx reverse-proxy in front of Keycloak with a self-signed certificate.

If you wish to create your own certificate, just issue the command (inside the `nginx` directory):

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout keycloak.key -out keycloak.crt -config keycloak-cert.conf -passin pass:YourStrongPassword
```

To get Keycloak up and running: `docker-compose up -d`

This also import a demo realm to get started.

Login with `admin/admin` at <http://localhost:8080/admin>
