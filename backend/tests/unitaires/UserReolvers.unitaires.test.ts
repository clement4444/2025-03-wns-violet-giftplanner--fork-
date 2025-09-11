import UserResolver from "../../src/resolvers/UserResolver";
import Users from "../../src/entities/Users";

describe("UserResolver test unitaire", () => {
    test("renvoie tous les utilisateurs existants", async () => {
        // constrie les fausses données
        const fakeUsers = [{ id: 1, firstName: "Alice" }, { id: 2, firstName: "Bob" }] as Users[];

        // simule la reponse de la bdd avec les fausses données
        jest.spyOn(Users, "find").mockResolvedValue(fakeUsers);

        // crée une instance du resolver
        const resolver = new UserResolver();
        // appelle la méthode getAllUsers
        const result = await resolver.getAllUsers();

        // vérifie que le résultat coorrespond aux fausses données
        expect(result).toEqual(fakeUsers);
        // verifie que la fausse méthode a été appelée une fois
        expect(Users.find).toHaveBeenCalledTimes(1);
    });

    test("renvoie un tableau vide si aucun utilisateur", async () => {
        // simule la reponse de la bdd avec un tableau vide
        jest.spyOn(Users, "find").mockResolvedValue([]);

        // crée une instance du resolver
        const resolver = new UserResolver();
        const result = await resolver.getAllUsers();

        // vérifie que le résultat est un tableau vide
        expect(result).toEqual([]);
    });

    test("propage une erreur si la DB échoue", async () => {
        // simule une erreur de la bdd
        jest.spyOn(Users, "find").mockRejectedValue(new Error("DB down"));

        // crée une instance du resolver
        const resolver = new UserResolver();
        // vérifie que le resolver a la bonne erreur
        await expect(resolver.getAllUsers()).rejects.toThrow("DB down");
    });

    test("renvoie des utilisateurs avec les bons champs", async () => {
        // constrie les fausses données
        const fakeUsers = [{ id: 50, firstName: "toto" }] as Users[];
        jest.spyOn(Users, "find").mockResolvedValue(fakeUsers);

        // crée une instance du resolver
        const resolver = new UserResolver();
        const [user] = await resolver.getAllUsers();

        // vérifie que le résultat a les bons champs
        expect(user).toHaveProperty("id", 50);
        expect(user).toHaveProperty("firstName", "toto");
    });

});
