// import data from "./data/groups.json";
import Button from "../utils/Button";
import Container from "../utils/Container"; 
import Card from "../utils/Card";
import type { GroupProps } from "../../types/Groups";

type GroupsProps = {
    groups: GroupProps[];
    setActiveGroup?: (id: GroupProps["id"]) => void;
    onClick?: () => void;
}


export default function Groups({groups, setActiveGroup}: GroupsProps) {
    return (
        <Container colour="blue" title="Mes Groupes" button={<Button text={"Ajouter un groupe"} icon="plus" colour="green" />}>
            {groups.map((group) => {
                    return (
                        <Card key={group.id} id={group.id} title={group.title} onClick={() => {setActiveGroup && setActiveGroup(group.id)}}>
                            <p className="text-gray-600 text-sm sm:text-base truncate overflow-hidden text-ellipsis whitespace-nowrap">
                                <span> Date limite: {group.date} </span> - <span> {group.participants} participants </span>
                            </p>
                        </Card>
                        );
                    })
                }
        </Container>
        
    );
}

 