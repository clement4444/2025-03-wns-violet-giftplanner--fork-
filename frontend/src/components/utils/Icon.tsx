import { FiPlusCircle } from "react-icons/fi";
import { FaArrowCircleRight, FaRegHeart } from "react-icons/fa";
import { HiDotsVertical, HiOutlineCurrencyDollar } from "react-icons/hi";

export type IconProps = {
  icon: "dots" | "plus" | "heart" | "dollar" | "arrow";
  text?: string;
  className?: string;
};

const iconMap = {
  dots: HiDotsVertical,
  plus: FiPlusCircle,
  heart: FaRegHeart,
  dollar: HiOutlineCurrencyDollar,
  arrow: FaArrowCircleRight,
};

export default function Icon({ icon, text, className }: IconProps) {
  const IconComponent = iconMap[icon];

  return (
    <div className={`flex items-center gap-1 ${className || ""}`}>
      <IconComponent className="w-5 aspect-[1/1]" />
      {text && <span>{text}</span>}
    </div>
  );
}
