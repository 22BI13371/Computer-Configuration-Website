import { fetchCpuWithFilter, fetchPcPartWithFilter } from '../lib/data';

export default async function Page() {
  const cookieStore = await cookies();
  let cpus;
  // const cpus = await fetchPcParts('Motherboard');
  const cpus = await fetchPcPartWithFilter(
    'CPU',
    {
      current_price: { min: 44000, max: 46000 },
      manufacturer: ['AMD', 'Intel'],
    },
    { series: 'AMD Ryzen 7' }
  );

  return cpus.map((cpu) => (
    <div>
      <p>{cpu.name}</p>
      {/* <p>{cpu.current_price / 100}</p>
      <p>{cpu.specification.cpu_socket}</p> */}
    </div>
  ));
}
