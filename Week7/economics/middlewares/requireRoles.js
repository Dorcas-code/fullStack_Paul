
// ? spread operator
/* 
  * ...allowedRoles
 * put all things inside the array inside the fucntion

*/
let requireRole = (...allowedRoles) => {
    return (req, res, next) => {
        // * if the request role is not inside allowedRole, will not be allowed
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json
                ({
                    message: "Forbidden"
                })
        }
        next()
    }
}

module.exports = requireRole