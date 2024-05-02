const jwt  = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
 
 
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({ message: "Authorization header missing or invalid" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        console.log("Decoded Token:", decoded);
        next();
    } catch (err) {
        console.error("Token Verification Error:", err);
        return res.status(403).json({ message: "Invalid token" });
    }
};

module.exports = {
    authMiddleware
}


 