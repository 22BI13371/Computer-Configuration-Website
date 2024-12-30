import Cooler from "./cooler";
import { fetchPcParts } from "@/app/lib/data";

async function CoolerPage() {
    const cooler =  await fetchPcParts('Cooler')
    console.log(cooler)
    return (
        <div>
            <Cooler cooler1={cooler}/> {/* Render the CPU component */}
        </div>
    );
};
export default CoolerPage;