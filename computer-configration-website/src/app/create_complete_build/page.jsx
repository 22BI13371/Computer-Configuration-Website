'use client';
import './createbuild.css'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { pcBuilds, pcBuildsParts, users, pcParts } from '@/app/lib/placeholder_data'; // Import your data
import React, { useState } from 'react';

const CreateCompleteBuild = () => {
    const [buildId, setBuildId] = useState(pcBuilds[0].id);

    const completebuilds = pcBuilds.filter((build) => !build.is_private);
    // console.log(completebuilds)

    const builds = pcBuilds.find((b) => b.id === buildId);
    // console.log(builds);

    const buildparts = pcBuildsParts.filter((item) => item.build_id === String(builds.id));
    const partIds = buildparts.map((part) => part.part_id);
    const pcparts = pcParts.filter((item) => partIds.includes(item.id));

    const totalPrice = pcparts.reduce((sum, part) => sum + part.current_price, 0);
    return(
    <div className='main_content'>
        <div className='page_title'>
            <h4>Build</h4>
            <h1 className='build_name'>New Completed Build</h1>
            <div className='user'>by You</div>
        </div>

        <div className='page_content'>
            <div className='sidebar'>
                <h4>Saved Lists</h4>
                <div className='save_list'>
                        {completebuilds.map((build) => (
                            <div className='saved_build' 
                            key={build.id} 
                            onClick={() => setBuildId(build.id)}>
                                {build.name}
                            </div>
                        ))}
                </div>
            </div>
            <div className='mainbar'>
                <div className='title'>
                    <h4>My Custom Build</h4>
                    <Link key={buildId} href={`/create_complete_build/${buildId}`}>
                        <Button>Use this build</Button>
                    </Link>
                </div>
                <div className='display'>
                    <div className='component'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th className='th_component'>Component</th>
                                    <th></th>
                                    <th className='th_selection' colSpan={2}>Selection</th>
                                    <th className='th_price'>Price</th>
                                    <th className='th_buy'></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            {pcparts.map((part) => (
                                <tr className='tr__product' key={part.id}>
                                    <th className='th__component'>
                                        <a href={`/products/${part.category}`}>{part.category}</a>
                                    </th>
                                    <th className='th__placement--empty'></th>
                                    <th className='th__image'></th>                                
                                    <th className='th__name'>{part.name}</th>
                                    <th className='th__price'>
                                        <h6>{part.current_price}</h6>
                                    </th>
                                    <th className='th__buy'></th>
                                </tr> 
                            ))}   
                            </tbody>
                        </table>
                        <div className='totalprice'>Total price: {parseFloat(totalPrice).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>  
    </div>

    )
}

export default CreateCompleteBuild