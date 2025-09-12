import GroupCard from "./GroupCard/GroupCard";
import data from "./GroupCard/data.json";
import Button from "../utils/Button";
import Container from "../utils/Container"; 


export default function Groups() {
    // Récupération des groupes depuis l'API
    const groups = data.groups;


    return (
        <Container colour="blue" title="Mes Groupes" button={<Button text="Ajouter un groupe" icon="plus" colour="green" />}>
            {groups.map((group) => {
                    return (
                        <GroupCard
                            key={group.id}
                            id={group.id}
                            title={group.title}
                            date={group.date}
                            participants={group.participants}
                        />
                        );
                    })
                }
        </Container>
        
    );
}

 