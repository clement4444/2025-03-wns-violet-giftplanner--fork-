import WishlistCard from "./WishlistCard";
import data from "./data.json";
import Container from "../../utils/Container";
import Button from "../../utils/Button";

export default function Wishlist() {
    const wishlist = data.wishlist;
    return (
        <>
            <div className="flex flex-row ">
                <Button text="Liste de souhaits" colour="green" icon="heart" />
                <Button text="Cagnotte" colour="blue" icon="heart" />
            </div>
            <Container colour="green" title="Mes Groupes" button={<Button text="Ajouter un groupe" icon="plus" colour="green" />}> 
                {wishlist.map((item) => {
                        return (
                            <WishlistCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                            />
                        );
                    })}
            </Container>

        </>
        
    );
}