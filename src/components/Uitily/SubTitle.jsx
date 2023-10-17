const SubTitle = ({ title, btnTitle }) => {
  return (
    <section className="flex justify-between my-7 font-bold">
      <div>{title}</div>
      {btnTitle ? <div className="cursor-pointer">{btnTitle}</div> : null}
    </section>
  );
};

export default SubTitle;
