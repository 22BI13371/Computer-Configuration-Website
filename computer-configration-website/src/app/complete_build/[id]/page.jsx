// build/[id].jsx
'use client';
import '@/styles/builddetail.css';
import Image from 'next/image';
import { pcBuilds, pcBuildsParts, users, pcParts } from '@/app/lib/placeholder_data'; // Import your data
import picture from '@/img/pic1.jpg'

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
                                <Image src={picture} width={200} height={200} alt="Main build image" />
                            </div>
                            <div className="side_img">
                                {/* {build.gallery.map((img, index) => (
                                    <Image key={index} src={img} width={50} height={50} alt={`Gallery image ${index + 1}`} />
                                ))} */}
                                <Image src={picture}/>
                                <Image src={picture}/>
                                <Image src={picture}/>
                                <Image src={picture}/>
                            </div>
                        </div>
                        <div className="components">
                            <h1>Part List</h1>
                            {pcparts.map((component) => (
                                <div className="component_item">
                                    <div className="side_img_component">
                                        <Image src={picture} width={50} height={50} alt={component.name} />
                                    </div>
                                    <div className="detail">
                                        <p>{component.category}</p>
                                        <h3>{component.name}</h3>
                                        <p>{component.current_price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mainbar">
                        <div className="description_box">
                            <h1>Description</h1>
                            <p>{build.description}
                                Example description
                            </p>
                        </div>
                        <div className="comment_box">
                            <h1>Leave a comment</h1>
                            <div className="input_comment">
                                <input className="cmbox" type="text" />
                                <button className="savebtn">Save</button>
                            </div>
                        </div>
                        <div className='comments'>
                            <div className='comment_title'>
                                <h1>Comments</h1>
                            </div> 
                            <div className='one_comment'>
                                <div className="user_name">
                                    <p className="user_avatar">
                                        <Image src={picture} alt={user.name}/>
                                    </p>
                                    <p className="username">{user.name}</p>
                                </div>
                                <div className='comment_detail'>
                                    <p>This is a good build</p>
                                </div>
                            </div>
                            <div className='one_comment'>
                                <div className="user_name">
                                    <p className="user_avatar">
                                        <Image src={picture} alt={user.name}/>
                                    </p>
                                    <p className="username">{user.name}</p>
                                </div>
                                <div className='comment_detail'>
                                    <p>This is a good build</p>
                                </div>
                            </div>           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuildDetail;
