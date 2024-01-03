import nav from "./nav";
import header from "../components/header.js";
import styles from "../src/app/globals.css";
const layout = ({ children }) => {
  return (
    <>
      <nav />
      <div className={globals.container}>
        <main className={global.main}>{children}</main>
      </div>
    </>
  );
};
export default layout;
