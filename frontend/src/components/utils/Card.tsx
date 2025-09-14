type CardProps = {
  id: number;
  title: string;
  img?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function Card({
  id,
  title,
  img="papier-theme",
  onClick,
  children,
}: CardProps) {
  return (
    <div
      className="flex items-center bg-white rounded-lg p-4 mr-4 shadow cursor-pointer"
      onClick={onClick ?? (() => console.log(`Card ${id} clicked`))}
    >
      <img
        src={`/images/${img}.jpg`}
        alt={title}
        className="h-12 w-12 rounded-full object-cover mr-4"
      />
      <div className="flex flex-col">
        <h2 className="font-bold text-gray-900 text-sm sm:text-base">{title}</h2>
        {children}
      </div>
    </div>
  );
}


