
// app/builderparts/page.js
import Builder from './builders'; // Import the Builder component
import { fetchPcPartsWithInClause } from '../lib/data';
import { getAllFromLocalStorage } from '../lib/builderData';

async function BuilderPartsPage() {
  return (
    <div>
      <Builder /> {/* Render the Builder component */}
    </div>
  );
}

export default BuilderPartsPage;
