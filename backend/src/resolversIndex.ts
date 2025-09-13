import Welcome from "./resolvers/welcome"
import UserResolver from "./resolvers/UserResolver"
import type { NonEmptyArray } from "type-graphql";

const resolverIndex = [
    Welcome,
    UserResolver,
] as NonEmptyArray<Function>;

export default resolverIndex;