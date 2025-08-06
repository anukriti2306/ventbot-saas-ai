import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }
    const options = {
        expiresIn: expiresIn
    };
    const token = jwt.sign(payload, secret, options);
    return token;
};
//# sourceMappingURL=token-manager.js.map