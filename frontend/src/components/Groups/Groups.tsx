import data from "./data/groups.json";
import Button from "../utils/Button";
import Container from "../utils/Container"; 
import Card from "../utils/Card";


export default function Groups() {
    // Récupération des groupes depuis l'API
    const groups = data.groups;


    return (
        <Container colour="blue" title="Mes Groupes" button={<Button text="Ajouter un groupe" icon="plus" colour="green" />}>
            {groups.map((group) => {
                    return (
                        <Card key={group.id} id={group.id} title={group.title}>
                            <p className="text-gray-600 text-xs sm:text-sm">
                                <span> Date limite: {group.date} </span> - <span> {group.participants} participants </span>
                            </p>
                        </Card>
                        );
                    })
                }
        </Container>
        
    );
}

 