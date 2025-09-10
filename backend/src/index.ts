import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import Welcome from "./resolvers/welcome";
import dataSource from "./config/db";
import dotenv from "dotenv";
import { getVariableEnv } from "./lib/envManager/envManager";

dotenv.config();

const port = getVariableEnv("SERVEUR_PORT", true);

async function startServer() {
    await dataSource.initialize();

    const schema = await buildSchema({
        resolvers: [Welcome],
    });

    const apolloServer = new ApolloServer({ schema });

    const { url } = await startStandaloneServer(apolloServer, {
        listen: { port },
    });
    console.info("hello Server started on " + url);
}
startServer();