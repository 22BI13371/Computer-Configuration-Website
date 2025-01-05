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

export function saveToLocalStorage(id, cat, price, name) {
  const part = {
    id: id,
    name: name,
    category: cat,
    price: price,
  };

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
        ? arr.push(window.localStorage.getItem(val))
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
