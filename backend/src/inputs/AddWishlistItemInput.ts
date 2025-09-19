import { Field, Float, InputType } from "type-graphql";

@InputType()
export class AddWishlistItemInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  imageUrl?: string;

  // so that if user adds a new item, they can select the appropriate list (needed ?)
  @Field({ nullable: true })
  listId?: string;
}
