import Icon from "./Icon";
import type { IconProps } from "./Icon";
type ButtonProps = {
  onClick?: () => void;
  text: string;
  colour?: "blue" | "green" | "red" | "orange" | "yellow";
  icon: IconProps["icon"];
  children?: React.ReactNode;
};

export default function Button({ onClick, text, colour = 'green', icon, children }: ButtonProps) {
    return (
        <button className={`bg-${colour} text-white px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-${colour}-600`} onClick={onClick}>
            <Icon icon={icon} text={text} />
        </button>
    );
}