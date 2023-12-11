import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    id: "657738ee4e53d345173d6291"
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    // console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzczOGVlNGU1M2QzNDUxNzNkNjI5MSIsImlhdCI6MTcwMjMxMjg4MSwiZXhwIjoxNzAyMzk1NjgxfQ.kNTw2XoZQCuJEJ7M2RHUyCnSfEXwUkV9Z0Tenndd6Wy";
    jwt.verify(invalidToken, JWT_SECRET);
}
catch(error) {
    console.log(error.message);
}