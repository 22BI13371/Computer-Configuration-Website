import Memory from './memory';
import { fetchPcParts } from '@/app/lib/data';

async function MemoryPage() {
    const memory = await fetchPcParts('Memory');

    return (
        <div>
            <Memory memory={memory} /> {/* Render the CPU component */}
        </div>
    );
};

export default MemoryPage;