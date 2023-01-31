import UCard from "./userCard";

const Jumbotron = () => {
  const radioList = [
    {
      type: "radio",
      name: "selectItem",
      id: "playstation",
      defaultChecked: true,
    },
    {
      type: "radio",
      name: "selectItem",
      id: "another",
      defaultChecked: false,
    },
  ];
  return (
    <div className="Jumbotron">
      {radioList.map((item) => (
        <input
          key={item.id}
          type={item.type}
          name={item.name}
          id={item.id}
          defaultChecked={item.defaultChecked}
        />
      ))}

      <div className="Jumbotron__introduct">
        <div className="Jumbotron__introduct-card">{<UCard />}</div>
        <div className="Jumbotron__introduct-card"></div>
      </div>
      <div className="Jumbotron__select">
        <div className="label-nav">
          <label
            className="Jumbotron__select-item"
            htmlFor="playstation"
            id="playstation-label"
          ></label>
          <label
            className="Jumbotron__select-item"
            htmlFor="another"
            id="another-label"
          ></label>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
