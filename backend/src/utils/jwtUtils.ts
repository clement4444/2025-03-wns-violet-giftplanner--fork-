import jwt from "jsonwebtoken";
import ms from "ms";
import { getVariableEnv } from "../lib/envManager/envManager";
import cookieManager from "../lib/cookiManager/cookiManager";
import type { UserToken } from "../types/token";
import type { ContextType } from "../types/context";

export function createToken(payload: UserToken, timeExpires?: ms.StringValue | number) {
    // récupère la variable d'environnement JWT_SECRET
    const JWT_SECRET = getVariableEnv("JWT_SECRET");

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: timeExpires });
    return token;
}

export function createAndSetToken(ctx: ContextType, payload: UserToken) {
    const token = createToken(payload, "7d");

    // set le cookie avec le token
    cookieManager.setCookie(ctx, "token", token, { maxAge: { d: 7 }, secure: false, sameSite: "lax" });

    return token;
}