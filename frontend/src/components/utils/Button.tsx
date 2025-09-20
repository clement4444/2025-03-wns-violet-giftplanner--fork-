import type { IconProps } from "./Icon";
import Icon from "./Icon";

type ButtonProps = {
  onClick?: () => void;
  text?: string;
  colour?: "blue" | "green" | "red" | "orange" | "yellow" | "dark";
  icon: IconProps["icon"];
  rounded?: boolean;
};

export default function Button({ onClick, text, colour = "green", icon, rounded = false }: ButtonProps) {
  return (
    <button
      type="button"
      className={`bg-${colour} text-white font-inter-extra-bold text-base ${rounded ? "rounded-full p-2" : "rounded-lg py-1 px-2"} flex items-center gap-1 font-medium shadow-md hover:brightness-110 hover:scale-[1.02] active:scale-[0.97] active:brightness-95 transition-all duration-200 ease-in-out `}
      onClick={onClick}
    >
      <Icon icon={icon} text={text} />
    </button>
  );
}
