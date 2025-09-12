import {
    Arg,
    Ctx,
    Field,
    ID,
    InputType,
    Mutation,
    Query,
    Resolver,
} from "type-graphql";
import Users from "../entities/Users";
import argon2 from "argon2";
import cookieManager from "../lib/cookiManager/cookiManager";
import { createAndSetToken } from "../utils/jwtUtils";
import type { ContextType } from "../types/context";

@InputType()
class SignupInput {
    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    date_of_birth: string
}

@InputType()
class LoginInput {
    @Field()
    email: string;

    @Field()
    password: string;
}

@Resolver(Users)
export default class UserResolver {
    @Query(() => [Users])
    async getAllUsers() {
        //récupère tout les utilisateurs
        const allUsers = Users.find()

        // renvoir tous les utilisateurs
        return allUsers;
    }

    @Query(() => [Users])
    async getAllUsersAdmin() {
        //récupère tout les utilisateurs
        const allUsers = Users.find({ where: { isAdmin: true } })

        // renvoir tous les utilisateurs
        return allUsers;
    }

    @Mutation(() => ID)
    async signup(@Arg("data") data: SignupInput, @Ctx() ctx: ContextType) {
        // verifie la validité des données
        const emailRegex = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"[^\"]*")@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(data.email)) {
            throw new Error("Adresse email invalide");
        }

        // Vérif mot de passe minimal
        if (data.password.length < 6) {
            throw new Error("Mot de passe trop court");
        }

        if (data.password.length > 100) {
            throw new Error("Mot de passe trop long");
        }

        // hash le mot de passe
        const password_hashed = await argon2.hash(data.password);

        // crée le nouvel utilisateur
        const user = Users.create({ ...data, password_hashed });
        //sauvegarde le nouvel utilisateur dans la bdd
        await user.save();

        // Crée le token & set le cookie
        const payload = { id: user.id, isAdmin: user.isAdmin };
        const token = createAndSetToken(ctx, payload);

        // return le token;
        return token;
    }

    @Mutation(() => ID)
    async login(@Arg("data") data: LoginInput, @Ctx() ctx: ContextType) {
        // essaye de trouver l'utilisateur grace a son mail
        const user = await Users.findOneOrFail({ where: { email: data.email } });

        // verifie que le mot de passe est correct (compar le claire avec le hash)
        const isValid = await argon2.verify(user.password_hashed, data.password);
        // en cas d'erreur ca crash
        if (!isValid) throw new Error("mot de passe incorrect");

        // Crée le token & set le cookie
        const payload = { id: user.id, isAdmin: user.isAdmin };
        const token = createAndSetToken(ctx, payload);

        // return le token
        return token;
    }

    @Mutation(() => ID)
    async logout(@Ctx() ctx: ContextType) {
        // set le cookie vide pour déconnecter l'utilisateur
        cookieManager.delCookie(ctx, "token");

        // return un message de confirmation
        return `Byebye ${ctx.user?.id}`;
    }
}
