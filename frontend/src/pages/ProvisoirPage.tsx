import { useLogoutMutation } from "../generated/graphql-types";
import { useNavigate } from "react-router";
import { useMyProfilStore } from "../zustand/myProfilStore";
import { toast } from "react-toastify"
import consoleErrorDev from "../hook/erreurMod";

// cette page est provisoire, elle sera supprimée qaund unification du travail sera faite
const ProvisoirPage = () => {
    const [logoutMutation] = useLogoutMutation();
    const { clearUserProfil } = useMyProfilStore();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await logoutMutation();
            if (res.data?.logout) {
                // on supprime le profil de l'utilisateur dans le store
                clearUserProfil();
                // on retourne a la home page
                navigate("/");
            } else {
                toast.error("La déconnexion a échoué");
            }
        } catch (err) {
            toast.error("Erreur pendant le déconnexion");
            // affiche l'erreur seulement en dev et pas en prod
            consoleErrorDev("Erreur de déconnexion :", err);
        }
    };

    return (
        <div>
            <h1 style={{ color: "red" }}>Page Provisoire</h1>
            <p>Ceci est une page temporaire en attendant l'intégration complète.</p>
            <p>faudra remplacer tout les /provisoir par le nom de la page principal</p>
            <p>il a un navigate("/provisoir") dans app.tsx et un dans LoginForm.tsx</p>
            <br />
            <p>ce boutton permet de ce déconncer, normalement on peut garder la logique quand le déplace a un autre endroit</p>
            <button
                type="button"
                onClick={handleLogout}
                style={{ padding: "10px 20px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >Déconnection</button>
        </div>
    );
};

export default ProvisoirPage;