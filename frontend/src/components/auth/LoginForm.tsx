
const LoginForm = () => {
    return (
        <div className="form-login-div">
            <h2  className="h2-login">Me connecter</h2>
            <div className="form-login-div">
                <form className="form-login">
                    {/* Input Pseudo */}
                    <div>
                        <input
                            type="text"
                            placeholder="Entrez votre email"
                            className="input-custom"
                        />
                    </div>

                    {/* Input Mot de passe */}
                    <div>
                        <input
                            type="password"
                            placeholder="Entrez votre mot de passe"
                            className="input-custom margin-more"
                        />
                    </div>

                    {/* Bouton de connexion */}
                    <button
                        type="submit"
                        className="button-black"
                    >
                        Connexion
                    </button>
                </form>

                {/* Lien vers inscription */}
                <p className="paragraph-login">
                    Pas encore de compte ?{" "}
                    <a href="/inscription" className="link-login">
                        Inscription
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;