import { CircleUserRound } from "lucide-react";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <header className="flex justify-between items-center h-16 shadow px-5">
      <h3 className="text-2xl font-semibold">
        FinEx<span className="text-red-700">Tech</span>
      </h3>

      <div title={user.name}>
        <CircleUserRound size={35} />
      </div>
    </header>
  );
};

export default Navbar;
