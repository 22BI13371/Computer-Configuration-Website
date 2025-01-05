// app/builderparts/page.js
import Builder from './builders';
// Import the Builder component
import { fetchPcPartsWithInClause } from '../lib/data';
import { getAllFromLocalStorage } from '../lib/builderData';
import { Suspense } from 'react';

export default async function BuilderPartsPage() {
  return (
    <div>
      <Suspense>
        <Builder />
      </Suspense>
    </div>
  );
}
