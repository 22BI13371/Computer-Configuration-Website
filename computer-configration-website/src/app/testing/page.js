import { fetchCpuWithFilter, fetchPcPartWithFilter } from '../lib/data';
import { cookies } from 'next/headers';
import { setCookie, clearCookie } from './actions';

export default async function Page() {
  const cookieStore = await cookies();
  let cpus;
  // const cpus = await fetchPcParts('Motherboard');
  try {
    if (!cpus) {
      cpus = await fetchPcPartWithFilter(
        'CPU',
        {
          current_price: { min: 44000, max: 46000 },
          manufacturer: ['AMD', 'Intel'],
        },
        { series: 'AMD Ryzen 7' }
      );
    } else {
      let cpuName = cookieStore.get('cpu_name');
    }

    return cpus.map((cpu) => (
      <div>
        <form action={setCookie}>
          <button type="submit">click here</button>
          <button type="submit" formAction={clearCookie}>
            delete cookie
          </button>
        </form>
        {/* <p>{cpu.name}</p> */}
        {/* <p>{cpu.current_price / 100}</p>
      <p>{cpu.specification.cpu_socket}</p> */}
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
