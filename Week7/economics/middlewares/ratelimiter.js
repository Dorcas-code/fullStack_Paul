/* 
    ? Rate limiting
    * handling how many requests our app can accept
    * prvents DDoS Attack (too many request that paralyze the server)
    * it only handles single IP address
    * can be configured to handle different IP's
    * helmet is a dependency we can use instead
    
    ? Building rate limiter
    * we need the following 
    * IP of where it's from
    * count of attempts
    * Time constraint
    * reset after time constraint
    * res gandling too many requests 
*/

let requests = {}

// Every middleware need req, res, next
let rateLimiter = (req, res, next) => {
    let ip = req.ip
    let now = Date.now()
    // console.log(req)
    // If I dun find a request ip
    // If no record found, create a record with ip & time
    if (!requests[ip]) {
        requests[ip] = {
            count: 1,
            statTIme: now
        }

        //move to the rest of the middleware
        return next()
    }
    // If no record found, check if 10s passed and reset it 
    if (now - requests[ip].startTime >= 10000) {
        requests[ip] = {

            count: 1,
            statTIme: now

        }
    }

    // if record exists AND its under 10s , increment count

    requests[ip].count++

    // if record exists AND its under 10s , AND above 3 attempts , BLOCk
    if (requests[ip].count > 3) {
        return res.status(429).json({
            message: "too many requests"
        })
    }
    next()
}
module.exports = rateLimiter