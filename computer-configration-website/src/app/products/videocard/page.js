import Videocard from './videocard'; // Ensure the path is correct
import { fetchPcParts } from '@/app/lib/data';

async function VideoCardPage() {
    const videoCard = await fetchPcParts('Video Card');

    return (
        <div>
            <Videocard videoCard={videoCard} />
        </div>
    );
};

export default VideoCardPage;