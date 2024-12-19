import { fetchCpuWithFilter, fetchPcPartWithFilter } from '../lib/data';

export default async function Page() {
  // const cpus = await fetchPcParts('Motherboard');
  try {
    const cpus = await fetchPcPartWithFilter(
      'CPU',
      {
        current_price: { min: 42000, max: 45000 },
        manufacturer: ['Intel', 'AMD'],
      },
      { series: 'Intel Core i9' }
    );
    console.log(cpus);
    return cpus.map((cpu) => (
      <div>
        <p>{cpu.name}</p>
        <p>{cpu.current_price}</p>
        <p>{cpu.part_number}</p>
      </div>
    ));
  } catch (error) {
    console.log(error);
    return (
      <div>
        <p>See this? ur db not up. Fix it </p>
      </div>
    );
  }
}
