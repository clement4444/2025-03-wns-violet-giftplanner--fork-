import Icon from "./Icon";
import type { IconProps } from "./Icon";
type ButtonProps = {
  onClick?: () => void;
  text: string;
  colour?: "blue" | "green" | "red" | "orange" | "yellow";
  icon: IconProps["icon"];
};

export default function Button({ onClick, text, colour = 'green', icon }: ButtonProps) {
    const bgClass = `bg-${colour} hover:bg-[var(--color-${colour})]`;
    
    return (
        <button className={`${bgClass} text-white p-1 rounded-lg flex items-center gap-1`} onClick={onClick}>
            <Icon icon={icon} text={text} />
        </button>
    );
}