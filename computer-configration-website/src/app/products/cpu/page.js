import CPU from './cpu';
import { fetchPcParts } from '@/app/lib/data';

async function CPUPage() {
    const cpu = await fetchPcParts('CPU')

    return (
        <div>
            <CPU cpu={cpu} /> {/* Render the CPU component */}
        </div>
    );
};

export default CPUPage;