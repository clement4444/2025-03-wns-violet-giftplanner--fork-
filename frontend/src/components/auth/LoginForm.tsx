import { useLoginMutation, LoginInput } from "../../generated/graphql-types";
import { useState } from "react";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    // const navigate = useNavigate();

    const [signup, { data, loading, error }] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        const result = await signup({
            variables: { data: form },
        });
        console.log("Token reçu :", result.data?.signup);
        } catch (err) {
        console.error("Erreur signup :", err);
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
                            onChange={(e)=>setForm({...form, email:e.target.value})}
                        />
                    </div>

                    {/* Input Mot de passe */}
                    <div>
                        <input
                            type="password"
                            placeholder="Entrez votre mot de passe"
                            className="input-custom margin-more"
                            value={form.password}
                            onChange={(e)=>setForm({...form, password:e.target.value})}
                        />
                    </div>

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
                    <Link to={"/inscription"} className="link-login">Inscription</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;