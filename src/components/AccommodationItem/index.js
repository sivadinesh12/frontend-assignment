import "./index.css";

const AccommodationItem = (props) => {
  const { eachCity, accommodationId, handleAccommodation } = props;
  const { city, id } = eachCity;

  const handleAccommodationClick = () => {
    handleAccommodation(id);
  };

  return (
    <li
      className={`accommodation-item ${
        accommodationId === id ? "selected" : ""
      }`}
      onClick={handleAccommodationClick}
    >
      {city}
    </li>
  );
};

export default AccommodationItem;
