import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1]; // Bearer token

  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Token is not valid" });
  }
}
