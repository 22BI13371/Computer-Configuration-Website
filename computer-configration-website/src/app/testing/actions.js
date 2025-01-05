'use server';

import { cookies } from 'next/headers';
import { fetchPcPartWithFilter } from '../lib/data';

export async function setCookie(data) {
  const cookieStore = await cookies();
  let cpuName = cookieStore.get('cpu_name');
  console.log(cpuName);

  if (!cpuName) {
    let cpus = await fetchPcPartWithFilter(
      1,
      {
        current_price: { min: 44000, max: 46000 },
        manufacturer: ['AMD', 'Intel'],
      },
      {}
    );
    console.log(cpus[0]);

    cookieStore.set({
      name: 'cpu_id',
      value: cpus[0].name,
      secure: true,
      sameSite: 'none',
      httpOnly: true,
    });
  } else {
    cpuName = cookieStore.get('cpu_name');
    console.log(cpuName.value);
  }
  // cookieStore.delete('cpu_name');
}

export async function clearCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('cpu_name');
}
