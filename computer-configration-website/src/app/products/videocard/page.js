import Videocard from './videocard'; // Ensure the path is correct
import { fetchPcParts } from '@/app/lib/data';

async function VideoCardPage() {
    const videoCard = await fetchPcParts('videoCard');

    return (
        <div>
            <Videocard videoCard={videoCard} />
        </div>
    );
};

export default VideoCardPage;