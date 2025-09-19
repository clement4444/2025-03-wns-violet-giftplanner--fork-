import Button from "../utils/Button";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="w-[12vw] max-w-[125px] bg-dark rounded-2xl flex flex-col gap-2 p-2">
      <Button
        icon="dollar"
        onClick={() => navigate("/dashboard/conversations")}
      />
      <Button
        icon="heart"
        onClick={() => navigate("/dashboard/wishlist")}
      />
    </div>
  );
}


