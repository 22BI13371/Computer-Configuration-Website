import Link from "next/link";
import Image from "next/image";

const BuildCard = ({ id, picture, title, specs, price }) => {
  return (
    <div className="build-item">
      <Link href={`/complete_build/build/${id}`}>{
            <>
              <Image src={picture} alt={title} width={200} height={150} />
              <div className="build-info">
                <h2>{title}</h2>
                {specs.map((spec, index) => (
                  <p key={index}>{spec}</p>
                ))}
                <button className="btn">Price: ${price}</button>
              </div>
            </>
          }
      </Link>
    </div>
  );
};

export default BuildCard;
