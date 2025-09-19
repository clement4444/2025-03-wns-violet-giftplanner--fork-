// import data from "./data/groups.json";

import type { GroupProps } from "../../types/Groups";
import Button from "../utils/Button";
import Card from "../utils/Card";
import Container from "../utils/Container";

type GroupsProps = {
  groups: GroupProps[];
  setActiveGroup?: (id: GroupProps["id"]) => void;
  onClick?: () => void;
};

export default function Groups({ groups, setActiveGroup }: GroupsProps) {
  return (
    <Container
      colour="blue"
      title="Mes Groupes"
      button={<Button text={"Ajouter un groupe"} icon="plus" colour="green" />}
    >
      {groups.map((group) => {
        return (
          <Card
            key={group.id}
            id={group.id}
            title={group.title}
            onClick={() => {
              setActiveGroup?.(group.id);
            }}
          >
            <p className="text-gray-600 text-sm sm:text-base truncate overflow-hidden text-ellipsis whitespace-nowrap">
              <span> Date limite: {group.date} </span> - <span> {group.participants} participants </span>
            </p>
          </Card>
        );
      })}
    </Container>
  );
}
