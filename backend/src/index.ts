import "reflect-metadata";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import Welcome from "./resolvers/welcome";
import UserResolver from "./resolvers/UserResolver";
import dataSource from "./config/db";
import { UserToken } from "./types/token";
import cookieManager from "./lib/cookiManeger/cookiManeger";
import { getVariableEnv } from "./lib/envManager/envManager";

dotenv.config();

const port = getVariableEnv("SERVEUR_PORT", true);

async function startServer() {
    await dataSource.initialize();

    const schema = await buildSchema({
        resolvers: [Welcome, UserResolver],
    });

    const apolloServer = new ApolloServer({ schema });

    const { url } = await startStandaloneServer(apolloServer, {
        listen: { port },
        context: async ({ req, res }) => {
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
    });
    console.info(`🚀 Serveur démarré sur ${url}`);
}
startServer();