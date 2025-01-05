import './editbuild.css'
import { Button } from 'react-bootstrap';
import { pcBuildsParts, pcParts, pcBuilds } from '@/app/lib/placeholder_data';
import picture from '@/img/pic1.jpg'
import Image from 'next/image';
import Link from 'next/link';

const ConfirmBuild = ({params}) => {
    const { id } = params;
    const build = pcBuilds.find((item) => item.id === String(id));
    const buildparts = pcBuildsParts.filter((item) => item.build_id === String(build.id));
    const partIds = buildparts.map((part) => part.part_id);
    const pcparts = pcParts.filter((item) => partIds.includes(item.id));
    
    return(
        <div className="main_content">
            <div className='page_title'>
                <h4>Build</h4>
                <h1 className='build_name'>Edit Completed Build</h1>
                <div className='user'>by You</div>
            </div>
            <div className='page_content'>
                <div className='sidebar'>
                    <Link href={"/create_complete_build"}>
                    <Button>Back to Choose Builds</Button>
                    </Link>
                    <div className="components">
                        <h1>Part List</h1>
                        {pcparts.map((component) => (
                        <div className="component_item" key={component.id}>
                            <div className="side_img_component">
                                <Image src={picture} width={50} height={50} alt={component.name} />
                            </div>
                            <div className="detail">
                                <p>{component.category}</p>
                                <h3>{component.name}</h3>                                                        <p>{component.current_price}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='mainbar'>
                    <div className='title'>
                        <h3>Description</h3>
                    </div>
                    <div className='comment_box'>
                        <label htmlFor="">Build Title</label>
                        <input className='build_title' type="text" name='title' placeholder='Build Title'/>
                    </div>
                    <div className='comment_box'>
                        <label htmlFor="">Build Description</label>
                        <textarea id="" rows={20} placeholder="Build Description (What do you use it for? What worked well? Any problems?)"></textarea>
                    </div>
                    <div><Button>Save</Button></div>
                </div>
            </div>
        </div>
        
    )
}

export default ConfirmBuild;