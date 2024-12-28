import Powersupply from './power-supply';
import { fetchPcParts } from '@/app/lib/data';

async function PowerSupplyPage() {
    const powerSupply = await fetchPcParts('powerSupply');
    console.log("Fetched Power Supply Data:", powerSupply);

    return (
        <div>
            <Powersupply powerSupply={powerSupply || []} />
        </div>
    );
}

export default PowerSupplyPage;
