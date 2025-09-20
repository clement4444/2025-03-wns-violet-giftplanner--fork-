import { Field, Float, GraphQLISODateTime, ID, ObjectType } from "type-graphql";

@ObjectType()
export class WishlistItem {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;

  @Field({ nullable: true })
  listId?: string;

  @Field({ nullable: true })
  userId?: string;
}
