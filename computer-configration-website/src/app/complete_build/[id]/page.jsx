// build/[id].jsx
'use client';
import '@/styles/builddetail.css';
import Image from 'next/image';
import products from '../build_data'; // Import your data

const BuildDetail = ({params}) => {
    const { id } = params;

    // Find the corresponding build from the data
    const build = products.find((item) => item.id === parseInt(id));

    // Handle the case where no build is found
    if (!build) {
        return <div>Build not found for ID: {id}</div>;
    }

    return (
        <>
            <div className="main_content">
                <div className="page_title">
                    <h4>Build</h4>
                    <h1 className="build_name">{build.title}</h1>
                    <div className="user">by {build.user}</div>
                </div>
                <div className="page_content">
                    <div className="sidebar">
                        <div className="gallery">
                            <div className="main_img">
                                <Image src={build.mainImage} width={200} height={200} alt="Main build image" />
                            </div>
                            <div className="side_img">
                                {build.gallery.map((img, index) => (
                                    <Image key={index} src={img} width={50} height={50} alt={`Gallery image ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                        <div className="components">
                            {build.components.map((component, index) => (
                                <div className="component_item" key={index}>
                                    <div className="side_img">
                                        <Image src={component.image} width={50} height={50} alt={component.name} />
                                    </div>
                                    <div className="detail">
                                        <h3>{component.name}</h3>
                                        <p>{component.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mainbar">
                        <div className="description_box">
                            <h2>Description</h2>
                            <p>{build.description}</p>
                        </div>
                        <div className="comment_box">
                            <h2>Leave a comment</h2>
                            <div className="input_comment">
                                <input className="cmbox" type="text" />
                                <button className="savebtn">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuildDetail;
