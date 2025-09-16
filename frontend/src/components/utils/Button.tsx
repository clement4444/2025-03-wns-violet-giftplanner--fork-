import Icon from "./Icon";
import type { IconProps } from "./Icon";
type ButtonProps = {
  onClick?: () => void;
  text: string;
  colour?: "blue" | "green" | "red" | "orange" | "yellow";
  icon: IconProps["icon"];
};

export default function Button({ onClick, text, colour = 'green', icon }: ButtonProps) {
    return (
        <button  
            className="text-white font-inter-extra-bold text-sm py-1 px-2 rounded-lg flex items-center gap-1 font-medium shadow-md hover:brightness-110 hover:scale-[1.02] active:scale-[0.97] active:brightness-95 transition-all duration-200 ease-in-out"  
            style={{ backgroundColor: `var(--color-${colour})` }}
            onClick={onClick}>
                <Icon icon={icon} text={text} />
        </button>


    );
}
