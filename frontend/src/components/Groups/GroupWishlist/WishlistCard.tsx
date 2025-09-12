type WishlistCardProps = {
    id: number;
    title: string;
    description: string;
    price?: number;
    children?: React.ReactNode;
};


export default function WishlistCard ({id, title, description, price, children,  }: WishlistCardProps ) {
  return (
    <div className="flex items-center bg-white rounded-lg p-4 shadow" onClick={() => console.log(`Groupe ${id} cliqué`)}>
        <img
          src="/images/papier-theme.jpg"
          alt="Papier Cadeau Theme"
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-gray-900 text-sm sm:text-base">
            {title}
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            {description}
          </p>
        </div>
      </div>

  );
};