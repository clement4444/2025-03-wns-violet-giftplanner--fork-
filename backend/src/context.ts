import jwt from "jsonwebtoken";
import { UserToken } from "./types/token";
import cookieManager from "./lib/cookiManeger/cookiManeger";
import { getVariableEnv } from "./lib/envManager/envManager";
import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone";

export default async function startServeurContext({ req, res }: StandaloneServerContextFunctionArgument) {
    let user: string | jwt.JwtPayload | null = null;
    const token = cookieManager.getCookie({ req, res }, "token");

    if (token) {
        // verify renvoie une string si invalide, un payload si valide
        const payload = jwt.verify(token, getVariableEnv("JWT_SECRET")) as string | jwt.JwtPayload;
        if (typeof payload === "string") {
            user = null;
        } else {
            //enlève les info qui ce sont rajouter
            const { iat, exp, ...userClean } = payload;
            user = userClean;
        }
    }
    return { req, res, user: user as UserToken };
}