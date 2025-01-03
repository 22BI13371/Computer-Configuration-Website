const partCategories = {
  CPU: 'cpu_id',
  Motherboard: 'motherboard_id',
  Case: 'case_id',
  Cooler: 'cooler_id',
  Memory: 'memory_id',
  Monitor: 'monitor_id',
  'Power Supply': 'power_supply_id',
  Storage: 'storage_id',
  'Video Card': 'video_card_id',
};

export function saveToLocalStorage(id, cat) {
  const partId = localStorage.getItem(partCategories[cat]);

  if (partId) {
    return;
  } else {
    localStorage.setItem(partCategories[cat], id);
  }
}

export function rmvStorageItem(cat) {
  localStorage.removeItem(partCategories[cat]);
}

export function rmvAllStorageItem() {
  for (const [key, val] of Object.entries(partCategories)) {
    localStorage.removeItem(val);
  }
}
