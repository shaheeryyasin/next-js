import link from "next/link";
import navstyles from "../src/app/globals.css";

const nav = () => {
  return (
    <nav class="navbar">
      <div>
        <ul class="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#conact">Contact</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default nav;
