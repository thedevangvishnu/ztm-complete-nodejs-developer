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

## How

Passportjs is an authentication middleware for Nodejs. It is used to authenticate requests. It has three major components: middleware, strategy and session. In this code, passport.authenticate() is the main middleware that is implementing the "google" strategy. The google strategy is configured inside the passport.use() function. This strategy has two components: the configuration part and the verify function.

When the request is made to "/google" endpoint, the passport.authenticate() middleware kicks off the google auth process. Upon its successfull completion, it returns back with an authorization code which is populated in the url and the request is redirected to the callback url defined inside the config options (which is same to the callbackURI configured earlier on the Google platform for this project). Now, the request goes to "/google/callback" endpoint and the passport.authenticate() kicks again. Since, the request this time has the authorization code (and the client id and client secret, from the config options), upon success, receives back a bunch of information such as profile info, with the access token. Then, passport populates req.user and creates a login session and the user is redirected to the url defined inside successRedirect.

Now the verify function is executed in which the application decides what to do with this user. As stated here, the user is passed to the next function in the stack using the done().

Now, passport needs to serialize user, which means to convert a complex object or a data structure into a format that can be transmitted, over a network, with ease. This is achieved by passport.serialize() middleware that takes the user and serailized the user id.

By now, we just have the user id and a session is created by passport. But there is no way for incoming requests to contain the information that they are from the same user (as HTTP is stateless). That's why we need to store an HTTP cookie that can store the session information. For this, we use cookie-session module. The cookieSession() middleware takes the serialized user id and stores it inside a cookie named "session" with the key defined inside its config options.

Whenever a new request (which now contains the cookie) comes from the authenticated user, the session info also needs to be verified whether they are legit or have been tampered with. For that passport uses passport.session() middleware.
Also, passport needs to be know which user is making request. Since, the cookie in the request stores the session info, the user can be deserialized using passport.deserializeUser() middleware.
Upon successful verification, the user is populated with user id which lets the server know that this is the same authenticated user.
