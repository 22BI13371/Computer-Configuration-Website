import Motherboard from './motherboard';
import { fetchPcParts } from '@/app/lib/data';

async function MotherboardPage() {
    const motherboard = await fetchPcParts('Motherboard');

    return (
        <div>
            <Motherboard motherboard={motherboard} /> {/* Render the CPU component */}
        </div>
    );
};

export default MotherboardPage;