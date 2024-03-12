# OAuth2.0

## History of Authentication and Authorization

## OAtuh FLow overview

## OAuth terminology

- Resource owner
- Client
- Authorization server
- Resource server
- Authorization grant
- Redirect URI/Callback
- Access token
- Scope
- Consent

- Back channel (highly secure channel): One backend server to another backend server
- Front channel (less secure channel): One client to another backend server

### Types of Authorization grant

- Authorization code flow --> uses both channel
- Implicit flow --> used in apps that only have front channel
- Resource owner password credentials flow (back channel only)
- Client credentials flow (back channel only)

- Oauth was originally designed for authorization and not authentication.
- There is no standard way to get information about user (such as name, email or other basic information, that might be with the authorization server when they first registered, e.g when you register for a Google account). The client has no standard way for getting access to such information.
- OAuth was designed to allow client to have certain authorization that was defined in the scope for the authorization code that client sent to the authorization server.
- OpenId Connect is an extension protocol of OAuth 2.0, which solves problem for authentication

## OpenId Connect

- ID token
- UserInfo endpoint for getting more user information
- Standard set of scopes
- Standardized implementation

### OpenID Connect Flow

- scope: openid profile
  - returns back an id_token (which is a jwt, which means it can be decoded to get user information, that is contained within the jwt(in payload part of jwt))
