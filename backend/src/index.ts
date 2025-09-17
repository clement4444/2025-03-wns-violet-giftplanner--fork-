import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { buildSchema } from "type-graphql";
import dataSource from "./config/db";
import startServeurContext from "./context";
import { getVariableEnv } from "./lib/envManager/envManager";
import resolverIndex from "./resolversIndex";

dotenv.config();

const port = getVariableEnv("SERVEUR_PORT", true);
const mode = getVariableEnv("MODE");

async function startServer() {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: resolverIndex,
  });

  const apolloServer = new ApolloServer({
    schema,
    introspection: mode === "dev", // désactive la liste des query &m utation en dehors de dev
  });

  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port },
    context: startServeurContext,
  });
  console.info(`🚀 Serveur démarré sur ${url}`);
}
startServer();
