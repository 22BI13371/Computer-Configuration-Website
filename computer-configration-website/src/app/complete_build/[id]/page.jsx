// build/[id].jsx
'use client';
import '@/styles/builddetail.css';
import Image from 'next/image';
import { pcBuilds, pcBuildsParts, users, pcParts } from '@/app/lib/placeholder_data'; // Import your data

const BuildDetail = ({params}) => {
    const { id } = params;

    // Find the corresponding build from the data
    const build = pcBuilds.find((item) => item.id === String(id));
    const user = users.find((item) => item.id === build.user_id);

    const buildparts = pcBuildsParts.filter((item) => item.build_id === String(build.id));
    // console.log('parts', buildparts)

    // Extract part IDs from buildparts
    const partIds = buildparts.map((part) => part.part_id);
    // console.log('Part IDs:', partIds);

    // Filter pcParts using the extracted part IDs
    const pcparts = pcParts.filter((item) => partIds.includes(item.id));
    // console.log('PC Parts:', pcparts);

    const totalPrice = pcparts.reduce((sum, part) => sum + part.current_price, 0);
    // console.log('Total Price:', totalPrice);

    // Handle the case where no build is found
    if (!build) {
        return <div>Build not found for ID: {id}</div>;
    }

    return (
        <>
            <div className="main_content">
                <div className="page_title">
                    <h4>Build</h4>
                    <h1 className="build_name">{build.name}</h1>
                    <div className="user">by {user.name}</div>
                </div>
                <div className="page_content">
                    <div className="sidebar">
                        <div className="gallery">
                            <div className="main_img">
                                <Image src={build.mainImage} width={200} height={200} alt="Main build image" />
                            </div>
                            <div className="side_img">
                                {/* {build.gallery.map((img, index) => (
                                    <Image key={index} src={img} width={50} height={50} alt={`Gallery image ${index + 1}`} />
                                ))} */}
                            </div>
                        </div>
                        <div className="components">
                            {pcparts.map((component, index) => (
                                <div className="component_item" key={index}>
                                    <div className="side_img">
                                        <Image src={component.image} width={50} height={50} alt={component.name} />
                                    </div>
                                    <div className="detail">
                                        <h3>{component.name}</h3>
                                        <p>{component.current_price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mainbar">
                        <div className="description_box">
                            <h2>Description</h2>
                            <p>{build.description}
                                Example description
                            </p>
                        </div>
                        <div className="comment_box">
                            <h2>Leave a comment</h2>
                            <div className="input_comment">
                                <input className="cmbox" type="text" />
                                <button className="savebtn">Save</button>
                            </div>
                        </div>
                        <div className='comments'>
                            <div className='comment_title'>
                                <h1>Comments</h1>
                            </div> 
                            <div className='1_comment'>
                                <div className='comment_user'><p>User Name</p></div>
                                <div className='comment_content'><p>Example pagaraph</p></div>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuildDetail;
