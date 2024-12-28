import Storage from './storage';
import { fetchPcParts } from '@/app/lib/data';

async function StoragePage() {
    const storage = await fetchPcParts('Storage');

    return (
        <div>
            <Storage storage={storage} /> {/* Render the CPU component */}
        </div>
    );
};

export default StoragePage;