import { useState } from "react";

const RegisterForm = () => {
    const [fileName, setFileName] = useState("Importer une photo");
    const [hasFile, setHasFile] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setHasFile(true);
        } else {
            setFileName("Importer une photo");
            setHasFile(false);
        }
    };


    return (
        <div className="form-register-div">
            <h2 className="h2-register">Créer mon compte</h2>
            <div className="form-register-div">
                <form className="form-login">
                    {/* Input Pseudo */}
                    <div>
                        <input
                            type="text"
                            placeholder="Nom"
                            className="input-custom"
                        />
                    </div>

                    {/* Input Mot de passe */}
                    <div>
                        <input
                            type="text"
                            placeholder="Prénom"
                            className="input-custom"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            className="input-custom"
                        />
                    </div>

                    <div>
                        <input
                            type="date"
                            placeholder="Date de naissance"
                            className="input-custom"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="input-custom"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Confirmation du mot de passe"
                            className="input-custom"
                        />
                    </div>

                    <div>
                        <label
                            className={`image-input-button margin-more ${hasFile ? "image-input-button-filled" : ""
                                }`}
                        >
                            <span className="file-label-text">{fileName}</span>
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>

                    {/* Bouton de connexion */}
                    <button
                        type="submit"
                        className="button-black margin-more size-20px"
                    >
                        Inscription
                    </button>
                </form>

                {/* Lien vers inscription */}
                <p className="paragraph-login">
                    Déjà inscrit ?{" "}
                    <a href="/connexion" className="link-login">
                        Connexion
                    </a>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;