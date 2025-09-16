import Container from "../utils/Container";
import Button from "../utils/Button";
type PiggyBankProps = {
    pot: number;
}

export default function PiggyBank({ pot }: PiggyBankProps) {
    return (
        <Container colour="yellow" title="Ma Cagnotte" button={<Button text="Ajouter des fonds" icon="plus" colour="green" />}>
            <div>La cagnotte est de { pot }</div>
        </Container>
    )
}