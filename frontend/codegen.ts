import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://backend:3310/",
  documents: ["src/graphql/operations.ts"],
  overwrite: true,
  generates: {
    "./src/generated/graphql-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,    // ✅ Génère les hooks directement importables
        withHOC: false,     // ❌ Ne génère pas les HOC obsolètes
        withComponent: false, // ❌ Ne génère pas les composants React
        reactApolloVersion: 3, // Indique Apollo Client v3 pour éviter Apollo.useQuery
        apolloReactCommonImportFrom: "@apollo/client/react",
        apolloReactHooksImportFrom: "@apollo/client/react",
      },
    },
  },
};
export default config;