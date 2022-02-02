import { NonEmptyArray } from "type-graphql";
import { PostResolver } from "./PostResolver";
import { UserResolver } from "./UserResolver";

const resolvers: NonEmptyArray<Function> = [PostResolver, UserResolver];

export default resolvers;
