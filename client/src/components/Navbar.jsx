import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { logout, user } = useAuth();
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to="/tasks/List">Task Manager</Link>
      </h1>
      <ul className="flex gap-x-2">
        <li>
          Welcome {user.username}
        </li>
        <li>
          <ButtonLink to="/tasks/add-task">Add Task</ButtonLink>
        </li>
        <li>
          <Link to="/" onClick={() => logout()}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
