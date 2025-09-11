import jwt from "jsonwebtoken";
import ms from "ms";
import { getVariableEnv } from "../lib/envManager/envManager";
import { UserToken } from "../types/token";

export function createToken(payload: UserToken, timeExpires?: ms.StringValue | number) {
    // récupère la variable d'environnement JWT_SECRET
    const JWT_SECRET = getVariableEnv("JWT_SECRET");

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: timeExpires });
    return token;
}