import headerStyles from "../src/app/global.css";

const Header = () => {
  return (
  <div>
<h1 className="title">
<span>WebDev</span> News
</h1>
  </div>
  <style jsx>
    {`
      .title {
        color: red;
      }  
    `}
  </style>
  )
};
export default header;
