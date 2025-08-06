import jwt, { Secret, SignOptions } from "jsonwebtoken";

export const createToken = (
  id: string,
  email: string,
  expiresIn: string
) => {
  const payload = { id, email };
  const secret: Secret = process.env.JWT_SECRET!;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  const options: SignOptions = {
    expiresIn: expiresIn as `${number}${"ms" | "s" | "m" | "h" | "d" | "w" | "y"}`
  };

  const token = jwt.sign(payload, secret, options);
  return token;
};
