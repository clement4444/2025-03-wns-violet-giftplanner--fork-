import data from "./data/whislist.json";
import Container from "../utils/Container";
import Button from "../utils/Button";
import Card from "../utils/Card";

export default function Wishlist() {
    const wishlist = data.wishlist;
    return (
        <>
            <Container colour="blue" title="Whislist" button={<Button text="Proposition" icon="plus" colour="green" />}> 
                {wishlist.map((item) => {
                        return (
                            <Card key={item.id} id={item.id} title={item.title} img={item.img}>
                                <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
                            </Card>
                        );
                    })}
            </Container>
        </>
           

        
        
    );
}