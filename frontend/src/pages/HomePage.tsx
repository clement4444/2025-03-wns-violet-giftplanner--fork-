const HomePage = () => {

    return (
        <div className="infohome-background-red">
            <img
                className="infohome-logo"
                src="/images/logo-clair.png"
                alt="Logo"
            />
            <img
                className="infohome-serpentin"
                src="/images/serpentin-jaune.png"
                alt="Serpentin Jaune"
            />
            <img
                className="infohome-carre"
                src="/images/carre-vert.png"
                alt="Carré vert"
            />
            <img
                className="infohome-etoile"
                src="/images/etoile-rose.png"
                alt="Etoile rose"
            />
            <img
                className="infohome-cotillon"
                src="/images/cotillon-bleu.png"
                alt="Cotillon rouge"
            />
            <div className="infohome-content">
                <h1 className="infohome-content-text-home">Le site magique pour ne plus se prendre la tête pour les cadeaux communs.</h1>
            </div>

            <div className="div-bouton-homepage">
                <a href="/connexion" className="button-white-home">
                    Connexion
                </a>
                <a href="/inscription" className="button-black-home">
                    Inscription
                </a>
            </div>
        </div>
    );
};

export default HomePage;