import "./index.css";

const CityItem = (props) => {
  const { city } = props;
  const { name, image } = city;

  const cityBackground = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    height: "200px",
    width: "300px",
  };

  return (
    <li className="city-item ">
      <div style={cityBackground} className="city-bg">
        <p className="city-name">{name}</p>
      </div>
    </li>
  );
};

export default CityItem;
