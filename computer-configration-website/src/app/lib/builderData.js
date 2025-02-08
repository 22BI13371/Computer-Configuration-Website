import Motherboard from '../products/motherboard/motherboard';
import { fetchPcPartWithFilter } from './data';
import { cooler } from './placeholder_data';
var _ = require('lodash');

export const partCategoriesItem = {
  CPU: 'cpu',
  Motherboard: 'motherboard',
  Case: 'case',
  Cooler: 'cooler',
  Memory: 'memory',
  Monitor: 'monitor',
  'Power Supply': 'power_supply',
  Storage: 'storage',
  'Video Card': 'video_card',
};

export function saveToLocalStorage(id, cat, price, name, specs) {
  const part = {
    id: id,
    name: name,
    category: cat,
    price: price,
    specification: specs,
  };

  const currLocalStorageArr = localStorage.getItem;
  const jsonStr = JSON.stringify(part);
  const partLocal = localStorage.getItem(partCategoriesItem[cat]);

  if (partLocal) {
    return;
  } else {
    localStorage.setItem(partCategoriesItem[cat], jsonStr);
  }
}

export function getAllFromLocalStorage() {
  let arr = [];
  if (typeof window !== 'undefined') {
    for (const [key, val] of Object.entries(partCategoriesItem)) {
      window.localStorage.getItem(val)
        ? arr.push(JSON.parse(window.localStorage.getItem(val)))
        : 'null';
    }
  }

  return arr;
}

export function rmvStorageItem(cat) {
  localStorage.removeItem(partCategoriesItem[cat]);
}

export function rmvAllStorageItem() {
  for (const [key, val] of Object.entries(partCategoriesItem)) {
    localStorage.removeItem(val);
  }
}

export function compatibleParts(data = [], category = '') {
  const allParts = getAllFromLocalStorage();
  let partList = _.cloneDeep(partCategoriesItem);

  allParts.forEach((element) => {
    partList[element.category] = element;
  });

  let result = _.clone(data);
  console.log('b4 filter', result);
  switch (category) {
    case 'CPU':
      if (typeof partList.Motherboard === 'object') {
        result = result.filter((element) => {
          // console.log(partList.CPU.specification.socket);
          return (
            element.specification.socket ===
            partList.Motherboard.specification.cpu_socket
          );
        });
      }
      if (typeof partList.Cooler === 'object') {
        let coolerSocket = partList.Cooler.specification.cpu_socket.split(', ');

        result.filter((element) => {
          return coolerSocket.includes(element.specification.socket);
        });
      }
      break;

    case 'Cooler':
      if (typeof partList.Motherboard === 'object') {
        result = result.filter((element) => {
          return element.specification.cpu_socket
            .split(', ')
            .includes(partList.Motherboard.specification.cpu_socket);
        });
      }
      if (typeof partList.CPU === 'object') {
        result = result.filter((element) => {
          return element.specification.cpu_socket
            .split(', ')
            .includes(partList.CPU.specification.socket);
        });
      }
      break;

    case 'Motherboard':
      if (typeof partList.CPU === 'object') {
        result = result.filter((element) => {
          return (
            element.specification.cpu_socket ===
            partList.CPU.specification.socket
          );
        });
      }
      if (typeof partList.Cooler === 'object') {
        result = result.filter((element) => {
          return partList.Cooler.specification.cpu_socket
            .split(', ')
            .includes(element.specification.cpu_socket);
        });
      }
      if (typeof partList.Memory === 'object') {
        let memType = partList.Memory.specification.speed.split('-')[0];
        const memSpeed = partList.Memory.specification.speed.replace(
          /\s+/g,
          ''
        );
        // console.log(memSpeed);
        result = result.filter((element) => {
          return (
            element.specification.memory_type === memType &&
            element.specification.memory_speed.split(', ').includes(memSpeed)
          );
        });
      }
      break;

    case 'Memory':
      let memType, memSpeed;
      if (typeof partList.Motherboard === ' object') {
        result = result.filter((element) => {
          memType = element.specification.speed.split('-')[0];
          memSpeed = element.specification.speed.replace(/\s+/g, '');
          return (
            partList.Motherboard.specification.memory_type === memType &&
            partList.Motherboard.specification.memory_speed
              .split(', ')
              .includes(memSpeed)
          );
        });
      }
      break;

    case 'Storage':
      let storageFormfactor,
        motherboardSpecsFormFactors =
          partList.Motherboard.specification.m2_slots;
      let motherboardStorageFormFactors = motherboardSpecsFormFactors
        .split(', ')
        .map((item) => {
          return item.split(' ')[0].split('/');
        });

      console.log(motherboardSpecsFormFactors);
      console.log(motherboardStorageFormFactors);
      if (typeof partList.Motherboard === ' object') {
        // result = result.filter((item) => {
        // })
      }
      break;
    case 'Video Card':
      
      break;
    case 'Power Supply':
      break;
    case 'Case':
      break;
    case 'Monitor':
      break;
  }
  console.log('after filters', result);
  return result;
}
