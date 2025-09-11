import {
    BaseEntity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    firstName: string;

    @Column()
    @Field()
    lastName: string;

    @Column({ unique: true })
    @Field()
    email: string;

    @Column()
    password_hashed: string;

    @Column({ nullable: true })
    @Field(() => String, { nullable: true })
    phone_number: string;

    @Column()
    @Field()
    date_of_birth: string;

    @CreateDateColumn({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP"
    })
    @Field()
    createdAt: Date;

    @UpdateDateColumn({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    })
    @Field()
    updatedAt: Date;

    @Column({ default: "lien_image_defaut" })
    @Field({ nullable: true })
    image_url: string;

    @Column({ default: false })
    @Field()
    isVerified: boolean;

    @Column({ default: false })
    @Field()
    isAdmin: boolean;
}

export default Users;