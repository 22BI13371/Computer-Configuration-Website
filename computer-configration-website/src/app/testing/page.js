import {
  fetchCpuWithFilter,
  fetchPcPartWithFilter,
  fetchPcBuildPartsWithId,
} from '../lib/data';
import { cookies } from 'next/headers';
import { setCookie, clearCookie } from './actions';
import { compatibleParts } from '../lib/builderData';

export default async function Page() {
  const cookieStore = await cookies();
  const all_cookies = cookieStore.getAll();
  let result = all_cookies.filter((obj) => {
    // console.log(obj.name);
    return ['cpu_name'].includes(obj.name);
  });
  // console.log('all cookies', all_cookies);
  // console.log('filtered cookies', result);
  let parts;
  let build1_parts;
  // const cpus = await fetchPcParts('Motherboard');

  try {
    if (!parts) {
      parts = await fetchPcPartWithFilter(
        1,
        { manufacturer: ['Gigabyte'] },
        {}
      );
      console.log(
        parts.forEach((part) => {
          console.log(part.name);
        })
      );

      build1_parts = await fetchPcBuildPartsWithId(
        '565ed09b-94bf-4b7e-9af9-b8ae6aa78624'
      );
    } else {
      let cpuName = cookieStore.get('cpu_name');
    }

    return parts.map((cpu) => (
      <div>
        <p>{cpu.name}</p>
        <p>{cpu.current_price / 100}</p>
        <p>{cpu.specification.cpu_socket}</p>
      </div>
    ));

    // return build1_parts.map((parts) => (
    //   <div>
    //     <p> {parts.id} </p>
    //   </div>
    // ));
  } catch (error) {
    console.log(error);
    return (
      <div>
        <p>See this? ur db not up. Fix it </p>
      </div>
    );
  }
}
