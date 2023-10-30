/**
 * install jsonwebtoken
 * jwt.sign (payload, secret, {expiresIn:})
 * token client
 * 
 * 
 */



/**
 * how to store token in the client side
 * 1.memory --->ok type 
 * 2.local storage ---> ok type (XSS)
 * 3.cookies: http only
 * 
 */

/**
 * 1. set cookies with http only. for development secure: false,
 * 
 * 2. cors 
 * app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
 * 
 * 3.client side axios setting
 * in axios set withCredentials: true
 * 
 */


/**
 * 1. to send cookies from the client make sure you added withCredential true for 
    the api call using axios 
*2. use cookie parser as middlewar
*
*
*
 */





/**
 * -------------------------
 *      MAKE API SECURE
 * -------------------------
 * 
 * concept :
 * 1.assign two tokens for each person (access token, refresh token)
 * 2.access token contains: user indentification (email, role, etc.). valid for shorter duration.
 * 3.refresh token is used: to recreate an access token that was expired.
 * 4.if refresh is invalid then logout the user.
 * 
 */

/**
 * 1.jwt --> json web token
 * 2.genarete a token by using jwt.sign 
 * 3. create api set to cookie . http only , secure , sameSite
 * 4.from client side: axios withCreadentials true
 * 5.cors setup origin and creadentials: true
 * 
 */