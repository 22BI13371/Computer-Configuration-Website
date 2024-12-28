import Monitor from './monitor';
import { fetchPcParts } from '@/app/lib/data';

async function MonitorPage() {
    const monitor = await fetchPcParts('Monitor');

    return (
        <div>
            <Monitor monitor={monitor} /> {/* Render the CPU component */}
        </div>
    );
};

export default MonitorPage;