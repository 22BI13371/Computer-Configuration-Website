import Case from './case';
import { fetchPcParts } from '@/app/lib/data';

async function CasePage() {
  const pcCase = await fetchPcParts('Case');

  return (
    <div>
      <Case pcCase={pcCase} /> {/* Render the CPU component */}
    </div>
  );
}

export default CasePage;
