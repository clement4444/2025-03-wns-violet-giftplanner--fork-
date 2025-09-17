import Welcome from "./resolvers/welcome"
import UserResolver from "./resolvers/UserResolver"
import WishlistResolver from "./resolvers/wishlist";
import type { NonEmptyArray } from "type-graphql";

const resolverIndex = [
    Welcome,
    UserResolver,
    WishlistResolver,
] as NonEmptyArray<Function>;

export default resolverIndex;