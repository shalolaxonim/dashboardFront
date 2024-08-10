import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-teal-950 text-white p-[50px] flex gap-[50px] font-bold">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/comments">Comments</Link>
    </div>
  );
}
