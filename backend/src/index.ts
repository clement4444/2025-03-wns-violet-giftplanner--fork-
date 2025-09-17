import "reflect-metadata";
import dotenv from "dotenv";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloServerPlugin } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolverIndex from "./resolversIndex";
import dataSource from "./config/db";
import { getVariableEnv } from "./lib/envManager/envManager";
import startServeurContext from "./context";

dotenv.config();

const port = getVariableEnv("SERVEUR_PORT", true);
const mode = getVariableEnv("MODE")

async function startServer() {
    await dataSource.initialize();

    const schema = await buildSchema({
        resolvers: resolverIndex,
    });

    const apolloServer = new ApolloServer({
        schema,
        introspection: mode === "dev" ? true : false, // désactive la liste des query &m utation en dehors de dev
    });

    const { url } = await startStandaloneServer(apolloServer, {
        listen: { port },
        context: startServeurContext
    });
    console.info(`🚀 Serveur démarré sur ${url}`);
}
startServer();
// @ts -expect-error: cors option not typed correctly