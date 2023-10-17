import { Link } from "react-router-dom";

const SubTitle = ({ title, btnTitle, path }) => {
  return (
    <section className="flex justify-between my-7 font-bold">
      <div>{title}</div>
      {btnTitle ? (
        <Link to={path}>
          <div className="cursor-pointer">{btnTitle}</div>
        </Link>
      ) : null}
    </section>
  );
};

export default SubTitle;
