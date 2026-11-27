
// ? spread operator
/* 
  * ...allowedRoles
 * put all things inside the array inside the fucntion

*/

let requireRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (allowedRoles.includes(req.user.role)) {
            next()

        } else {
            return res.status(403).json({
                message: "Forbidden"
            })
        }


    }
}

module.exports = requireRole
