// app/builderparts/page.js
import Builder from './builders';
// Import the Builder component
import { fetchPcPartsWithInClause } from '../lib/data';
import { getAllFromLocalStorage } from '../lib/builderData';
import { Suspense } from 'react';
import { compatibleParts } from '../lib/builderData';
import { fetchPcParts } from '../lib/data';

export default async function BuilderPartsPage() {
  const tmp = await fetchPcParts('Memory');
  return (
    <div>
      <Suspense>
        <Builder tmp={tmp} />
      </Suspense>
    </div>
  );
}
