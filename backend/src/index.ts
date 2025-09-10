import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import Welcome from "./resolvers/welcome";
import dataSource from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const port = Number(process.env.SERVEUR_PORT || 3310);

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