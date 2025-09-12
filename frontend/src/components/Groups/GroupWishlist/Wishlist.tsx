import WishlistCard from "./WishlistCard";
import data from "./data.json";

export default function Wishlist() {
    const wishlist = data.wishlist;
    return (
        <div className="bg-orange p-6 rounded-2xl w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4 border-red-500 border pb-2">
                <h1 className="text-white font-bold text-lg">Liste Anniversaire de Marie </h1>
                <button className="bg-green text-white px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-green-600">
                    Ajouter un cadeau
                </button>
            </div>

  
            <div className="space-y-4">
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

                
            </div>
        </div>
    );
}