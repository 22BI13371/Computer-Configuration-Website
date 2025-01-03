import Powersupply from './power-supply'; // Ensure the path is correct
import { fetchPcParts } from '@/app/lib/data';

async function PowerSupplyPage() {
    const powerSupply = await fetchPcParts('Power Supply');

    return (
        <div>
            <Powersupply powerSupply={powerSupply} /> {/* Use Powersupply here */}
        </div>
    );
};

export default PowerSupplyPage;
