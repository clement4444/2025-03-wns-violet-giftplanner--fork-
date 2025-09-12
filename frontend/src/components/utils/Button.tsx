type ButtonProps = {
  onClick?: () => void;
  text: string;
  colour?: "blue" | "green" | "red" | "orange" | "yellow";
  icon?: "plus" | "dollar" | "heart" | "cancel";
  children?: React.ReactNode;
};

export default function Button({ onClick, text, colour = 'green', icon, children }: ButtonProps) {
    return (
        <button className={`bg-${colour} text-white px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-${colour}-600`} onClick={onClick}>
            {text}
        </button>
    );
}