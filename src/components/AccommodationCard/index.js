import "./index.css";

const AccommodationCard = (props) => {
  const { accommodation } = props;
  const { name, address, price, image } = accommodation;
  return (
    <li className="accommodation-card">
      <img src={image} alt={name} className="accommodation-img" />
      <div className="p-2 d-flex flex-column align-items-start">
        <h3 className="card-heading">{name}</h3>
        <p className="address">{address}</p>
        <p className="price ">
          Price: <strong>${price}</strong>/Week
        </p>
      </div>
    </li>
  );
};

export default AccommodationCard;
