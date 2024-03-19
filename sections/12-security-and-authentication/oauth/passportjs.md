# Passport

## What

- Passport is an authentication middleware for Nodejs.
- Single purpose: to authenticate requests
- Three pieces in passport: middleware, strategies, sessions

### Middleware

- passport.authenticate("strategy", {options}) is the middleware that authenticates requests
- If authentication succeeds:
  - req.user is populated to the authenticated user request.
  - a login session is created.
  - next function in the stack is called.
  - succesRedirect: configure options property that will redirect user to a specific location if the authentication succeeds.
- If authentication fails:
  - responses with 401 unauthorized
  - failureRedirect: configure option property that will redirect the user to a specific location if auth fails
- These middleware authenticate by using what's called a "strategy"

### Strategy

- Strategy is what encapsulates the authentication mechanism.
  - Authentication mechanism
    - It's a mechanism that defines how to encode and verify credentials from an incoming request.
    - The auth mechanism for simple username-password login is very different from that of a SSO of Google or Facebook.
- Hence, different strategies implement different auth mechanisms.
- How to use strategies:
  - Configure
    - const localStrategy = new LocalStrategy((username, password, cb) => {})
      - the function inside constructor is called the "verify" function
      - the result of this function can be success, failure or error.
  - Use inside passport.use(localStrategy)
  - For brevity, strategies are configured and used in a single statement
    - passport.use(new LocalStrategy((username, passwrod, cb) => {}))

### Sessions

- Sessions are way to store user information while the user is interacting with the appliction.
- Passport provides a middleware to authenticate sessions as well
  - passport.session();
