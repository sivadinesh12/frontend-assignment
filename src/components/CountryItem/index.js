import "./index.css";

const CountryItem = (props) => {
  const { country, setActiveTabId, activeTabId } = props;
  const { name, id } = country;
  const handleCountryitem = () => {
    setActiveTabId(id);
  };
  return (
    <li
      className={`country-item ${activeTabId === id ? "selected" : ""}`}
      onClick={handleCountryitem}
    >
      {name}
    </li>
  );
};

export default CountryItem;
