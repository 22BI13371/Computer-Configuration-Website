import Cooler from './cooler';
import { fetchPcParts } from '@/app/lib/data';

async function CoolerPage() {
    const cooler = await fetchPcParts('Cooler')

    return (
        <div>
            <Cooler cooler={cooler} /> {/* Render the CPU component */}
        </div>
    );
};

export default CoolerPage;