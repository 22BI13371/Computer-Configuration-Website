'use client';
import '@/styles/builddetail.css'

const BuildDetail = () => {
    return(
        <>
        <div className="main_content">
            <div className='page_title'>
                <h4>Build</h4>
                <h1 className='build_name'>Vaporwave Dream Gaming Build</h1>
                <div className='user'>"by User ABC"</div>
            </div>
            <div className='page_content'>
                <div className='sidebar'>a</div>
                <div className='mainbar'>
                    <div className='description_box'>
                        <h2>Description</h2>
                        <p>This is a rebuild from an early 2024 system I put together. Got a new case and a few other things. Got the latest BIOS installed for the 14700K and runs great. Used for gaming and work equally. Love Lian Li cases, and the Evo RGB is my favorite. Tried a few others (including the new Lian Li Vision Compact) but the Evo RGB is by far the best IMO.</p>
                    </div>
                    <div className='comment_box'>
                        <h2>Leave a comment</h2>
                        <div className='input_comment'>
                            <input className='cmbox' type="text" />
                            <button className='savebtn'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BuildDetail;