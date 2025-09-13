import { useLoginMutation } from "../../generated/graphql-types";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const LoginForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [messageError, setMessageError] = useState("");
    const navigate = useNavigate();

    const [login] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await login({
                variables: { data: form },
            });

            // si la connexion a reussi
            if (res.data) {
                // rediriger vers la page d'accueil
                navigate("/");
            }
        } catch (err: any) {
            // si c'est une erreur GraphQL
            if (err.graphQLErrors && err.graphQLErrors.length > 0) {
                // Erreur renvoyée par le serveur
                setMessageError(err.graphQLErrors[0].message);
            } else {
                // Erreur réseau / autre
                setMessageError("Un problème est survenu, veuillez réessayer plus tard.");
            }
        }
    };

    return (
        <div className="form-login-div">
            <h2 className="h2-login">Me connecter</h2>
            <div className="form-login-div">
                <form className="form-login" onSubmit={handleSubmit}>
                    {/* Input Pseudo */}
                    <div>
                        <input
                            type="text"
                            placeholder="Entrez votre email"
                            className="input-custom"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                    </div>

                    {/* Input Mot de passe */}
                    <div>
                        <input
                            type="password"
                            placeholder="Entrez votre mot de passe"
                            className="input-custom margin-more"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                    </div>

                    {messageError.length > 0 ? <p>{messageError}</p> : null}

                    {/* Bouton de connexion */}
                    <button
                        type="submit"
                        className="button-black size-20px"
                    >
                        Connexion
                    </button>
                </form>

                {/* Lien vers inscription */}
                <p className="paragraph-login">
                    Pas encore de compte ?{" "}
                    <Link to={"/inscription"} className="link-login">
                        Inscription
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;