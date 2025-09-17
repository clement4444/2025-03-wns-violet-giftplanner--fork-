import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: "http://localhost:3310/graphql",
    documents: "src/**/*.{ts,tsx,graphql,gql}",
    generates: {
        "src/generated/graphql.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo"
            ],
            config: {
                withHooks: true,
                importBase: "@apollo/client/react",
            }
        }
    }
};

export default config;