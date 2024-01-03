import layout from "../components/layout";
import "../app/global.css";
function Glimpgear({ components, pageprops }) {
  return (
    <layout>
      <component {...pageprops} />
    </layout>
  );
}
export default Glimpgear;
