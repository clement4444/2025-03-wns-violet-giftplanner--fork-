import "reflect-metadata";
import dotenv from "dotenv";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolverIndex from "./resolversIndex";
import dataSource from "./config/db";
import { getVariableEnv } from "./lib/envManager/envManager";
import startServeurContext from "./context";

dotenv.config();

const port = getVariableEnv("SERVEUR_PORT", true);

async function startServer() {
    await dataSource.initialize();

    const schema = await buildSchema({
        resolvers: resolverIndex,
    });

    const apolloServer = new ApolloServer({ schema });

    const { url } = await startStandaloneServer(apolloServer, {
        listen: { port },
        context: startServeurContext,
    });
    console.info(`🚀 Serveur démarré sur ${url}`);
}
startServer();
// @ts -expect-error: cors option not typed correctly