import Link from "next/link";
import Image from "next/image";
import { pcBuildsParts, pcBuilds, pcParts } from "../lib/placeholder_data";


const BuildCard = ({id, picture, title, users, users_id, price }) => {
  // Find the user from the users array using user_id
  console.log("User ID:", users_id);
  const user = users.find((user) => user.id === users_id);
  // Handle case where user is not found
  const userName = user ? user.name : "Unknown User";

  // Find the corresponding build from the data
  const build = pcBuilds.find((item) => item.id === String(id));
  const buildparts = pcBuildsParts.filter((item) => item.build_id === String(build.id));
  // console.log('parts', buildparts)

  // Extract part IDs from buildparts
  const partIds = buildparts.map((part) => part.part_id);
  // console.log('Part IDs:', partIds);

  // Filter pcParts using the extracted part IDs
  const pcparts = pcParts.filter((item) => partIds.includes(item.id));
  // console.log('PC Parts:', pcparts);

  const totalPrice = pcparts.reduce((sum, part) => sum + part.current_price, 0);

  return (
    <div className="build-item">
      <Image src={picture} alt={title} width={200} height={150} />
      <div className="user">
        <h4>{userName}</h4>
      </div>
      <div className="build-info">
        <h2>{title}</h2>
        <button className="btn">Price: ${parseFloat(totalPrice).toFixed(2)}</button>
      </div>
    </div>
  );
};

export default BuildCard;
