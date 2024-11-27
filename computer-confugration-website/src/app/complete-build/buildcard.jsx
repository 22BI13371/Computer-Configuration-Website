import Image from "next/image";

const BuildCard = ({ picture, title, specs, price }) => {
  return (
    <div className="build-item">
      <Image src={picture} alt={title} width={200} height={150} />
      <div className="build-info">
        <h2>{title}</h2>
        {specs.map((spec, index) => (
          <p key={index}>{spec}</p>
        ))}
        <button className="btn">Price: ${price}</button>
      </div>
    </div>
  );
};

export default BuildCard;