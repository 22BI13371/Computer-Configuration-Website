import { removeIdToJson } from './utils';
let date = new Date().toISOString().split('T')[0];

const users = [
  {
    id: 'e7d6f3ed-f041-4745-91a3-50e9150ed830',
    name: 'Admin',
    email: 'admin@nextmail.com',
    password: 'adminpassword',
    is_admin: true,
    created_at: date,
  },
  {
    id: 'a003132b-580d-4235-91ed-5c73a32ae0b3',
    name: 'User 1',
    email: 'user_1@nextmail.com',
    password: 'user1password',
    is_admin: false,
    created_at: '2024-10-10',
  },
  {
    id: '9af3f418-4aa6-4426-9f01-bf38fdc044ef',
    name: 'User 2',
    email: 'user_2@nextmail.com',
    password: 'user2password',
    is_admin: false,
    created_at: '2024-10-13',
  },
  {
    id: 'f5ab9f96-1a72-42c2-b899-867e7595c650',
    name: 'Alice Green',
    email: 'alice.green@example.com',
    password: 'password123',
    is_admin: false,
    created_at: '2024-11-01',
  },
  {
    id: '84282ae3-aea4-41f5-8945-b23d5aa72c2b',
    name: 'Bob Miller',
    email: 'bob.miller@example.com',
    password: 'mypassword',
    is_admin: false,
    created_at: '2024-11-05',
  },
  {
    id: '84282ae3-aea4-41f5-8945-b23d5aa72c2b',
    name: 'Charlie Smith',
    email: 'charlie.smith@example.com',
    password: 'charlie123',
    is_admin: false,
    created_at: '2024-10-25',
  },
  {
    id: 'f78b6099-6e9c-4a50-a302-24727a7fbc8c',
    name: 'Diana Rose',
    email: 'diana.rose@example.com',
    password: 'secure123',
    is_admin: false,
    created_at: '2024-09-15',
  },
  {
    id: 'f8734c24-6f60-46bc-87ca-697f6688c0ce',
    name: 'Ethan Clark',
    email: 'ethan.clark@example.com',
    password: 'easyPass',
    is_admin: false,
    created_at: '2024-11-20',
  },
  {
    id: '5e714961-26b9-4595-98cf-f620df7cee5f',
    name: 'Fiona Lewis',
    email: 'fiona.lewis@example.com',
    password: 'welcome',
    is_admin: false,
    created_at: '2024-10-10',
  },
  {
    id: '95844861-afcf-4dc9-b848-1aa6998c3cd8',
    name: 'George Taylor',
    email: 'george.taylor@example.com',
    password: 'letmein',
    is_admin: false,
    created_at: '2024-11-15',
  },
  {
    id: '22fd3331-81aa-49b3-afbf-9e86f264df9b',
    name: 'Hannah White',
    email: 'hannah.white@example.com',
    password: 'hannah1',
    is_admin: false,
    created_at: '2024-08-30',
  },
  {
    id: '7c5f3aae-ebb3-4b26-924d-d7b29d1e1e6d',
    name: 'Ian Brown',
    email: 'ian.brown@example.com',
    password: 'simple123',
    is_admin: false,
    created_at: '2024-11-02',
  },
  {
    id: '034efdae-037e-40f6-8d23-6e0c60c7b538',
    name: 'Jenna King',
    email: 'jenna.king@example.com',
    password: 'king123',
    is_admin: false,
    created_at: '2024-11-22',
  },
];

const posts = [
  {
    id: 'e4e78fdb-df40-4c37-95fb-f7c8dd466749',
    user_id: 'e7d6f3ed-f041-4745-91a3-50e9150ed830',
    title: 'Exploring JavaScript Basics',
    body: 'JavaScript is a versatile programming language used for web development...',
    created_at: '2024-11-01',
    updated_at: '2024-11-10',
  },
  {
    id: '93f64501-ddc5-432e-b964-506d6ad74563',
    user_id: 'a003132b-580d-4235-91ed-5c73a32ae0b3',
    title: 'Understanding REST APIs',
    body: 'REST APIs are widely used for building web services due to their simplicity...',
    created_at: '2024-11-03',
    updated_at: null,
  },
  {
    id: '5bf21340-6947-4547-aba0-0c19321402a4',
    user_id: 'a003132b-580d-4235-91ed-5c73a32ae0b3',
    title: 'CSS Grid vs Flexbox',
    body: 'Both CSS Grid and Flexbox are powerful tools for layout design...',
    created_at: '2024-10-20',
    updated_at: '2024-10-25',
  },
  {
    id: 'ddecb66c-f309-49b4-b008-bb5e1f01afd0',
    user_id: 'a003132b-580d-4235-91ed-5c73a32ae0b3',
    title: 'Introduction to Node.js',
    body: 'Node.js allows JavaScript to run on the server-side, making it great for full-stack development...',
    created_at: '2024-09-15',
    updated_at: null,
  },
  {
    id: 'c0966c8b-b8d5-4aeb-bf91-33945f3f6539',
    user_id: '9af3f418-4aa6-4426-9f01-bf38fdc044ef',
    title: 'Debugging in Python',
    body: 'Debugging is an essential skill for every programmer. Python offers tools like pdb for effective debugging...',
    created_at: '2024-11-15',
    updated_at: '2024-11-18',
  },
  {
    id: '76f9abf1-9333-48af-b07b-901a67bdcd16',
    user_id: '9af3f418-4aa6-4426-9f01-bf38fdc044ef',
    title: 'Getting Started with React',
    body: 'React is a JavaScript library for building user interfaces. It’s component-based and declarative...',
    created_at: '2024-10-05',
    updated_at: null,
  },
  {
    id: 'b948a2ac-b47e-4800-90f2-2609d7898cca',
    user_id: '9af3f418-4aa6-4426-9f01-bf38fdc044ef',
    title: 'Version Control with Git',
    body: 'Git is an essential tool for developers to track changes in their codebase...',
    created_at: '2024-08-25',
    updated_at: '2024-08-30',
  },
  {
    id: 'ec3539a1-a0ad-434b-8088-e9edb0a2b2ba',
    user_id: '9af3f418-4aa6-4426-9f01-bf38fdc044ef',
    title: 'Asynchronous Programming in JavaScript',
    body: 'Understanding async/await and promises is critical for handling asynchronous tasks in JavaScript...',
    created_at: '2024-11-20',
    updated_at: null,
  },
  {
    id: 'd1b0e6f2-efd3-47ff-ac86-f0fbb4fbab52',
    user_id: 'f5ab9f96-1a72-42c2-b899-867e7595c650',
    title: 'Database Normalization',
    body: 'Normalization is the process of organizing data in a database to reduce redundancy...',
    created_at: '2024-10-01',
    updated_at: '2024-10-10',
  },
  {
    id: 'fb8c2559-69c9-4da7-b921-3d3bee5538c0',
    user_id: 'f5ab9f96-1a72-42c2-b899-867e7595c650',
    title: 'Introduction to Machine Learning',
    body: 'Machine learning involves training algorithms to recognize patterns in data...',
    created_at: '2024-11-22',
    updated_at: null,
  },
];

const comments = [
  {
    id: '503dd981-d56b-46a6-8ae3-d62b17d9efc6',
    post_id: 'e4e78fdb-df40-4c37-95fb-f7c8dd466749',
    user_id: 'a003132b-580d-4235-91ed-5c73a32ae0b3',
    text: 'Great post! I learned a lot from this.',
    created_at: '2024-11-01',
  },
  {
    id: 'ae23de80-671a-4c56-a3ec-9e0919621086',
    post_id: 'e4e78fdb-df40-4c37-95fb-f7c8dd466749',
    user_id: 'a003132b-580d-4235-91ed-5c73a32ae0b3',
    text: 'Could you elaborate on this point?',
    created_at: '2024-11-02',
  },
  {
    id: '4127694b-f6ab-4ed0-87c4-49beddfa877c',
    post_id: 'e4e78fdb-df40-4c37-95fb-f7c8dd466749',
    user_id: 'a003132b-580d-4235-91ed-5c73a32ae0b3',
    text: "I disagree with your argument, but it's well written.",
    created_at: '2024-10-25',
  },
  {
    id: '071158e6-1c63-4107-816f-40297358b98f',
    post_id: '93f64501-ddc5-432e-b964-506d6ad74563',
    user_id: '9af3f418-4aa6-4426-9f01-bf38fdc044ef',
    text: 'This was really helpful, thank you!',
    created_at: '2024-09-30',
  },
  {
    id: '2579627e-7bac-4189-a344-aa38f51a9842',
    post_id: '93f64501-ddc5-432e-b964-506d6ad74563',
    user_id: '9af3f418-4aa6-4426-9f01-bf38fdc044ef',
    text: 'Interesting perspective, I never thought about it this way.',
    created_at: '2024-11-20',
  },
  {
    id: 'c1edaed8-b6ce-461b-9424-5b5207a9599d',
    post_id: '93f64501-ddc5-432e-b964-506d6ad74563',
    user_id: '9af3f418-4aa6-4426-9f01-bf38fdc044ef',
    text: 'Your explanation was so clear and concise!',
    created_at: '2024-10-15',
  },
  {
    id: 'b2f1beee-4a2d-4608-9a13-89802b620250',
    post_id: '93f64501-ddc5-432e-b964-506d6ad74563',
    user_id: '9af3f418-4aa6-4426-9f01-bf38fdc044ef',
    text: 'I had a similar experience, thanks for sharing!',
    created_at: '2024-08-29',
  },
  {
    id: 'c07805c7-52d9-4e7e-b0ed-19abe6656549',
    post_id: 'ddecb66c-f309-49b4-b008-bb5e1f01afd0',
    user_id: 'f5ab9f96-1a72-42c2-b899-867e7595c650',
    text: 'Could you provide more resources on this topic?',
    created_at: '2024-11-12',
  },
  {
    id: '7e293e9a-a4ce-45a0-8ae8-c499651561f2',
    post_id: 'ddecb66c-f309-49b4-b008-bb5e1f01afd0',
    user_id: 'f5ab9f96-1a72-42c2-b899-867e7595c650',
    text: 'This answered all my questions, great job!',
    created_at: '2024-11-21',
  },
  {
    id: '632099e3-aaa4-4ff2-966e-b8f74ee6d7e0',
    post_id: '5bf21340-6947-4547-aba0-0c19321402a4',
    user_id: 'f8734c24-6f60-46bc-87ca-697f6688c0ce',
    text: 'Looking forward to reading more posts like this!',
    created_at: '2024-10-05',
  },
];

 export const cpu = [
  // Intel Core i5-14400F 2.5 GHz 10-Core Processor
  {
    id: 'b2dc819d-994c-4038-8df9-30a12aac8475',
    series: 'Intel Core i5',
    micro_architecture: 'Raptor Lake Refresh ',
    core_family: 'Raptor Lake Refresh ',
    core_count: 10,
    thread_count: 16,
    socket: 'LGA1700',
    performance_core_clock: 2.5,
    efficiency_core_clock: 3.5,
    efficiency_core_boost_clock: 4.7,
    l2_cache: 95,
    l3_cache: 20,
    tdp: 65,
    integrated_graphics: 'None',
    max_supported_memory: 192,
    ecc_support: true,
    includes_cooler: true,
    packaging: 'Boxed',
    lithography: 7,
    includes_cpu_cooler: true,
    simultaneous_multithreading: 'Yes:Hyper-Threading',
  },
  // AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor
  {
    id: '8afca899-d9c0-494e-895a-1d5f369bb893',
    series: 'AMD Ryzen 7',
    micro_architecture: 'Zen 4',
    core_family: 'Raphael',
    core_count: 8,
    thread_count: 16,
    socket: 'AM5',
    performance_core_clock: 4.2,
    efficiency_core_boost_clock: 5,
    l2_cache: 8,
    l3_cache: 96,
    tdp: 120,
    integrated_graphics: 'Radeon',
    max_supported_memory: 128,
    ecc_support: true,
    includes_cooler: false,
    packaging: 'Boxed',
    lithography: 5,
    includes_cpu_cooler: false,
    simultaneous_multithreading: true,
  },
  // Intel Core i9-14900K 3.2 GHz 24-Core Processor
  {
    id: '35bdeee5-d7a7-46a4-ae68-e7f0a5e323c1',
    series: 'Intel Core i9',
    micro_architecture: 'Raptor Lake Refresh',
    core_family: 'Raptor Lake Refresh',
    core_count: 24,
    thread_count: 32,
    socket: 'LGA1700',
    performance_core_clock: 3.2,
    performance_core_boost_clock: 6,
    efficiency_core_clock: 2.4,
    efficiency_core_boost_clock: 4.4,
    l2_cache: 32,
    l3_cache: 36,
    tdp: 125,
    integrated_graphics: 'Intel UHD Graphics 770',
    max_supported_memory: 192,
    ecc_support: true,
    includes_cooler: false,
    packaging: 'Boxed',
    lithography: 7,
    includes_cpu_cooler: false,
    simultaneous_multithreading: 'Yes: Hyper-Threading',
  },
];

export const cooler = [
  // EK AIO Elite 360 D-RGB 66.04 CFM Liquid CPU Cooler
  {
    id: 'e120c0e0-678a-4ef5-ab82-d4a4704bcd13',
    fan_rpm: '550 - 2200 RPM',
    noise_level: 31.6,
    color: 'black',
    cpu_socket:
      'AM4, AM5, LGA1150, LGA1151, LGA1155, LGA1156, LGA1200, LGA1700, LGA1851, LGA2011, LGA2011-3, LGA2066',
    water_cooled: 'yes - 360mm',
    fanless: false,
  },
  // Cooler Master Hyper 212 Black Edition 42 CFM CPU Cooler
  {
    id: '166f6902-6a3b-4795-bfba-b295350a92af',
    fan_rpm: '650 - 2000 RPM',
    noise_level: '6.5 - 26 dB',
    color: 'Black',
    height: 159,
    cpu_socket:
      'AM2, AM2+, AM3, AM3+, AM4, AM5, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1200, LGA1366, LGA1700, LGA1851, LGA2011, LGA2011-3, LGA2066',
    water_cooled: false,
    fanless: false,
  },
  // Noctua NH-D15 chromax.black 82.52 CFM CPU Cooler
  {
    id: '60c31fec-2827-446c-a591-6e47419c068b',
    fan_rpm: '300 - 1500 RPM',
    noise_level: '19.2 - 24.6 dB',
    color: 'Black',
    height: 165,
    cpu_socket:
      'AM2, AM2+, AM3, AM3+, AM4, AM5, FM1, FM2, FM2+, LGA1150, LGA1151, LGA1155, LGA1156, LGA1200, LGA1700, LGA1851, LGA2011, LGA2011-3, LGA2066',
    water_cooled: false,
    fanless: false,
  },
];

const motherboard = [
  // MSI B760M GAMING PLUS WIFI Micro ATX LGA1700
  {
    id: '18009bd8-f337-41ad-a7c6-fa7293796c9a',
    cpu_socket: 'LGA1700',
    form_factor: 'Micro ATX',
    chipset: 'Intel B760',
    memory_max: 192,
    memory_type: 'DDR5',
    memory_slots: 4,
    memory_speed:
      'DDR5-4800, DDR5-5000, DDR5-5200, DDR5-5400, DDR5-5600, DDR5-5800, DDR5-6000, DDR5-6200, DDR5-6400, DDR5-6600, DDR5-6800',
    color: 'Black / Silver',
    pcie_x16_slots: 2,
    pcie_x8_slots: 0,
    pcie_x4_slots: 0,
    pcie_x1_slots: 0,
    pci_slots: 1,
    m2_slots: '2242/2260/2280 M-key, 2242/2260/2280 M-key',
    mini_pcie_slots: 0,
    half_mini_pcie_slots: 0,
    mini_pcie_msata_slots: 0,
    msata_slots: 0,
    sata_6_0_gb_s: 4,
    onboard_ethernet: '1 x 2.5 Gb/s (Realtek RTL8125BG)',
    onboard_video: 'Depends on CPU',
    usb_2_0_headers: 2,
    usb_2_0_headers_single_port: 0,
    usb_3_2_gen1_headers: 2,
    usb_3_2_gen2_headers: 1,
    usb_3_2_gen2x2_headers: 0,
    support_ecc: false,
    wireless_networking: 'Wi-Fi 6E',
    raid_support: true,
    uses_back_connect_connectors: false,
  },
  // MSI MAG B650 TOMAHAWK WIFI ATX AM5 Motherboard
  {
    id: 'e7e16036-d01e-4d3d-92bc-ac89d6f2daef',
    cpu_socket: 'AM5',
    form_factor: 'ATX',
    chipset: 'AMD B650 ',
    memory_max: 256,
    memory_type: 'DDR5',
    memory_slots: 4,
    memory_speed:
      'DDR5-4800, DDR5-5000, DDR5-5200, DDR5-5400, DDR5-5600, DDR5-5800, DDR5-6000, DDR5-6200, DDR5-6400, DDR5-6600, DDR5-7000, DDR5-7200, DDR5-7400, DDR5-7600',
    color: 'Black',
    pcie_x16_slots: 2,
    pcie_x8_slots: 0,
    pcie_x4_slots: 0,
    pcie_x1_slots: 0,
    pci_slots: 0,
    m2_slots: '2260/2280 M-key, 2260/2280 M-key, 2260/2280 M-key',
    mini_pcie_slots: 0,
    half_mini_pcie_slots: 0,
    mini_pcie_msata_slots: 0,
    msata_slots: 0,
    sata_6_0_gb_s: 6,
    onboard_ethernet: '1 x 2.5 Gb/s (Realtek RTL8125B)',
    onboard_video: 'Depends on CPU ',
    usb_2_0_headers: 2,
    usb_2_0_headers_single_port: 0,
    usb_3_2_gen1_headers: 1,
    usb_3_2_gen2_headers: 1,
    usb_3_2_gen2x2_headers: 0,
    support_ecc: false,
    wireless_networking: 'Wi-Fi 6E',
    raid_support: true,
    uses_back_connect_connectors: false,
  },
  // Gigabyte Z790 AORUS ELITE AX ATX LGA1700 Motherboard
  {
    id: '4d2ec336-50df-439c-b8d8-48cc6b804312',
    cpu_socket: 'LGA1700',
    form_factor: 'ATX',
    chipset: 'Intel Z790',
    memory_max: 192,
    memory_type: 'DDR5',
    memory_slots: 4,
    memory_speed:
      'DDR5-4000, DDR5-4800, DDR5-5200, DDR5-5400, DDR5-5600, DDR5-5800, DDR5-6000, DDR5-6200, DDR5-6400, DDR5-6600, DDR5-6800, DDR5-7000, DDR5-7200, DDR5-7400, DDR5-7600',
    color: 'Black',
    pcie_x16_slots: 3,
    pcie_x8_slots: 0,
    pcie_x4_slots: 0,
    pcie_x1_slots: 0,
    pci_slots: 0,
    m2_slots:
      '2280/22110 M-key, 2280/22110 M-key, 2280/22110 M-key, 2280/22110 M-key',
    mini_pcie_slots: 0,
    half_mini_pcie_slots: 0,
    mini_pcie_msata_slots: 0,
    msata_slots: 0,
    sata_6_0_gb_s: 6,
    onboard_ethernet: '1 x 2.5 Gb/s (Realtek)',
    onboard_video: 'Depends on CPU',
    usb_2_0_headers: 2,
    usb_2_0_headers_single_port: 0,
    usb_3_2_gen1_headers: 1,
    usb_3_2_gen2_headers: 1,
    usb_3_2_gen2x2_headers: 0,
    support_ecc: false,
    wireless_networking: 'Wi-Fi 6E',
    raid_support: true,
    uses_back_connect_connectors: false,
  },
];

const memory = [
  // Corsair Vengeance 32 GB (2 x 16 GB) DDR5-5600 CL36 Memory
  {
    id: '8ec3bd41-787e-47ee-8c85-112b37be40bb',
    speed: 'DDR5-5600',
    form_factor: '288-pin DIMM (DDR5) ',
    modules: '2 x 16GB ',
    price_gb: 3.281,
    color: 'Black',
    first_word_latency: 12.857,
    cas_latency: 36,
    voltage: 1.25,
    timing: '36-36-36-76 ',
    ecc_registered: 'Non-ECC / Unbuffered ',
    heat_spreader: true,
  },
  // G.Skill Flare X5 32 GB (2 x 16 GB) DDR5-6000 CL30 Memory
  {
    id: '247ff643-f864-44af-b0d3-7aad6e59d278',
    speed: 'DDR5-6000',
    form_factor: '288-pin DIMM (DDR5) ',
    modules: '2 x 16GB',
    price_gb: 3.125,
    color: 'Black',
    first_word_latency: 10,
    cas_latency: 30,
    voltage: 1.35,
    timing: '30-38-38-96 ',
    ecc_registered: 'Non-ECC / Unbuffered',
    heat_spreader: true,
  },
  // TEAMGROUP T-Create Expert 32 GB (2 x 16 GB) DDR5-6000 CL30 Memory
  {
    id: 'a0bc2d2b-b2cb-445a-bd2d-14d9cb833457',
    speed: 'DDR5-6000',
    form_factor: '288-pin DIMM (DDR5)',
    modules: '2 x 16GB',
    price_gb: 2.562,
    color: 'Black',
    first_word_latency: 10,
    cas_latency: 30,
    voltage: 1.35,
    timing: '30-36-36-76',
    ecc_registered: 'Non-ECC / Unbuffered',
    heat_spreader: true,
  },
];

const storage = [
  // Kingston NV2 500 GB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive
  {
    id: '6d28fb5f-dde9-44dd-beb1-c5a5a2aeb230',
    capacity: 500,
    price_per_gb: 0.076,
    type: 'SSD',
    form_factor: 'M.2-2280 ',
    interface: 'M.2 PCIe 4.0 X4 ',
    nvme: 'true',
  },
  // Samsung 990 Pro 2 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive
  {
    id: '1f1fde57-61e1-4feb-b004-0a8b008bf67b',
    capacity: 2048,
    price_per_gb: 0.08,
    type: 'SSD',
    cache: 2048,
    form_factor: 'M.2-2280',
    interface: 'M.2 PCIe 4.0 X4',
    nvme: true,
  },
  // Crucial P3 1 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive
  {
    id: '85507b63-6a79-462d-be56-19a92ced7fef',
    capacity: 1024,
    price_per_gb: 0.062,
    type: 'SSD',
    form_factor: 'M.2-2280',
    interface: 'M.2 PCIe 3.0 X4',
    nvme: true,
  },
];

const videoCard = [
  // MSI VENTUS 2X BLACK OC GeForce RTX 4060 8 GB Video Card
  {
    id: '70b0ba27-5594-4eb4-9a63-18343f27ba10',
    chipset: 'GeForce RTX 4060 ',
    memory: 8,
    memory_type: 'GDDR6',
    core_clock: 1830,
    boost_clock: 2505,
    effective_memory_clock: '',
    interface: 'PCIe x16',
    color: 'Black',
    frame_sync: 'G-Sync',
    length: 199,
    tdp: 115,
    case_expansion_slot_width: 2,
    total_slot_width: 2,
    cooling: '2 Fans ',
    external_power: '1 PCIe 8-pin ',
    displayport_14a_outputs: 1,
    hdmi_21a_outputs: 3,
  },
  // MSI GeForce RTX 3060 Ventus 2X 12G GeForce RTX 3060 12GB 12 GB Video Card
  {
    id: '0b8d1f91-eaf6-4a9f-b4db-2279127b2719',
    chipset: 'GeForce RTX 3060 12GB',
    memory: 12,
    memory_type: 'GDDR6',
    core_clock: 1320,
    boost_clock: 1777,
    effective_memory_clock: 15000,
    interface: 'PCIe x16',
    color: 'Black',
    frame_sync: 'G-Sync',
    length: 235,
    tdp: 170,
    case_expansion_slot_width: 2,
    total_slot_width: 2,
    cooling: '2 Fans',
    external_power: '1 PCIe 8-pin',
    displayport_14a_outputs: 3,
    hdmi_21a_outputs: 1,
  },
  {
    id: '1ea4e074-7807-4e2b-87c8-10da4ee0de67',
    chipset: 'Radeon RX 7900 XT',
    memory: 20,
    memory_type: 'GDDR6',
    core_clock: 2000,
    boost_clock: 2450,
    effective_memory_clock: 0,
    interface: 'PCIe x16',
    color: 'Black / Red',
    frame_sync: 'FreeSunc',
    length: 313,
    tdp: 331,
    case_expansion_slot_width: 2,
    total_slot_width: 3,
    cooling: '3 Fans',
    external_power: '2 PCIe 8-pin',
    displayport_14a_outputs: 2,
    hdmi_21a_outputs: 2,
  },
];

const pcCase = [
  // Corsair 4000D Airflow ATX Mid Tower Case
  {
    id: '36871519-8ea4-4d32-afc7-1ef027878607',
    type: 'ATX Mid Tower',
    color: 'Black',
    power_supply: 'None',
    side_panel: 'Tinted Tempered Glass',
    power_supply_shroud: true,
    front_panel_usb: 'USB 3.2 Gen 2 Type-C, USB 3.2 Gen 1 Type-A',
    motherboard_form_factor: 'ATX, EATX, Micro ATX, Mini ITX',
    max_video_card_length: '360 mm / 14.173"',
    drive_bays: '2 x Internal 3.5", 2 x Internal 2.5"',
    expansion_slots: '7 x Full-Height, 2 x Full-Height via Riser',
    dimensions: '453 mm x 230 mm x 466 mm, 17.835" x 9.055" x 18.346"',
    volume: '48.553 L, 1.715 ft³',
  },
  // NZXT H5 Flow (2022) ATX Mid Tower Case
  {
    id: 'b79d319e-ea70-4773-8ffa-d47b3ee356a7',
    type: 'ATX Mid Tower',
    color: 'White',
    power_supply: null,
    side_panel: 'Tempered Glass ',
    power_supply_shroud: true,
    front_panel_usb: 'USB 3.2 Gen 2 Type-C, USB 3.2 Gen 1 Type-A',
    motherboard_form_factor: 'ATX, EATX, Micro ATX, Mini ITX',
    max_video_card_length: '365 mm / 14.37"',
    drive_bays: '1 x Internal 3.5", 1 x Internal 2.5"',
    expansion_slots: '7 x Full-Height',
    dimensions: '446 mm x 227 mm x 464 mm, 17.559" x 8.937" x 18.268"',
    volume: '46.976 L, 1.659 ft³',
  },
  // Corsair iCUE 4000X RGB ATX Mid Tower Case
  {
    id: '6709084f-7c83-41bc-b62a-7da4ef138f2f',
    type: 'ATX Mid Tower',
    color: 'Black',
    power_supply: false,
    side_panel: 'Tempered Glass',
    power_supply_shroud: true,
    front_panel_usb: 'USB 3.2 Gen 2 Type-C, USB 3.2 Gen 1 Type-A',
    motherboard_form_factor: 'ATX, Micro ATX, Mini ITX',
    max_video_card_length: '360 mm / 14.173"',
    drive_bays: '2 x Internal 3.5", 2 x Internal 2.5"',
    expansion_slots: '7 x Full-Height',
    dimensions: '453 mm x 230 mm x 466 mm, 17.835" x 9.055" x 18.346"',
    volume: '48.553 L, 1.715 ft³',
  },
];

const powerSupply = [
  // MSI MAG A650BN 650 W 80+ Bronze Certified ATX Power
  {
    id: '1fa4dd7c-a4fb-4502-9f64-ab6bdef46309',
    type: 'ATX ',
    efficiency_rating: '80+ Bronze ',
    wattage: 650,
    length: 140,
    modular: 'None',
    color: 'Black',
    fanless: false,
    atx_4_pin_confalsenectors: 0,
    eps_8_pin_connectors: 1,
    pcie_12_4_pin_12vphwrd_connectors: 0,
    pcie_12_pin_connectors: 0,
    pcie_8_pin_connectors: 0,
    pcie_6_2_pin_connectors: 2,
    pcie_6_pin_connectors: 0,
    sata_connectors: 5,
    molex_4_pin_connectors: 2,
  },
  // Corsair RM750e (2023) 750 W 80+ Gold Certified Fully Modular ATX Power Supply
  {
    id: '0ccff6d7-66c7-401b-8da1-d080df0a6466',
    type: 'ATX',
    efficiency_rating: '80+ Gold',
    wattage: 750,
    length: 140,
    modular: 'Full',
    color: 'Black',
    fanless: false,
    atx_4_pin_connectors: 0,
    eps_8_pin_connectors: 2,
    pcie_12_4_pin_12vphwrd_connectors: 1,
    pcie_12_pin_connectors: 0,
    pcie_8_pin_connectors: 0,
    pcie_6_2_pin_connectors: 3,
    pcie_6_pin_connectors: 0,
    sata_connectors: 7,
    molex_4_pin_connectors: 4,
  },
  // MSI A1000G PCIE5 1000 W 80+ Gold Certified Fully Modular ATX Power Supply
  {
    id: '93844ca9-42a5-4e0a-a302-65f2342595f1',
    type: 'ATX',
    efficiency_rating: '80+ Gold',
    wattage: 1000,
    length: 150,
    modular: 'Full',
    color: 'Black',
    fanless: false,
    atx_4_pin_connectors: 0,
    eps_8_pin_connectors: 2,
    pcie_12_4_pin_12vphwrd_connectors: 1,
    pcie_12_pin_connectors: 0,
    pcie_8_pin_connectors: 0,
    pcie_6_2_pin_connectors: 6,
    pcie_6_pin_connectors: 0,
    sata_connectors: 12,
    molex_4_pin_connectors: 4,
  },
];

const monitor = [
  // BenQ GW2480 23.8" 1920 x 1080 60 Hz Monitor
  {
    id: 'c386d256-a8e2-47f5-b475-d01f8ea6ff4e',
    screen_size: 23.8,
    resolution: '1920 x 1080 ',
    refrest_rate: 60,
    response_time: 50,
    panel_type: 'IPS',
    aspect_ratio: '16:9 ',
    color: 'Black',
    brightness: 250,
    pixel_pitch: 274,
    widescreen: true,
    curved_screen: false,
    curvature_radius: '',
    frame_sync: 'None',
    built_in_speakers: true,
    viewing_angle: '178° H x 178° V ',
    inputs: '1 x HDMI, 1 x VGA, 1 x DisplayPort',
    vesa_mounting: '',
    hdr_tier: '',
  },
  // Dell Alienware AW3423DWF 34.2" 3440 x 1440 165 Hz Curved Monitor
  {
    id: '361e47b4-5026-4657-8bb1-1cf38d289224',
    screen_size: 34.18,
    resolution: '3440 x 1440',
    refrest_rate: 165,
    response_time: 0.1,
    panel_type: 'QD-OLED',
    aspect_ratio: '21:9',
    color: 'Black',
    brightness: 1000,
    pixel_pitch: 233,
    widescreen: true,
    curved_screen: true,
    curvature_radius: '1800R',
    frame_sync: 'FreeSync Premium Pro',
    built_in_speakers: false,
    viewing_angle: '178° H x 178° V',
    inputs: '1 x HDMI, 2 x DisplayPort 1.4',
    vesa_mounting: '100 x 100',
    hdr_tier: 'HDR 400',
  },
  // LG 27GL83A-B 27.0" 2560 x 1440 144 Hz Monitor
  {
    id: '044662a7-ae27-468d-b962-11a2d1462c80',
    screen_size: 27,
    resolution: '2560 x 1440',
    refrest_rate: 144,
    response_time: 1,
    panel_type: 'IPS',
    aspect_ratio: '16:9',
    color: 'Black / Red',
    brightness: 350,
    pixel_pitch: 0.233,
    widescreen: true,
    curved_screen: false,
    curvature_radius: null,
    frame_sync: 'FreeSync, G-Sync Compatible',
    built_in_speakers: false,
    viewing_angle: '178° H x 178° V',
    inputs: '1 x HDMI, 1 x DisplayPort',
    vesa_mounting: '100 x 100',
    hdr_tier: false,
  },
];

const pcParts = [
  {
    id: cpu[0].id,
    name: 'Intel Core i5-14400F 2.5 GHz 10-Core Processor',
    current_price: 175.81,
    category: 'CPU',
    manufacturer: 'Intel',
    part_number: 'BX8071514400F',
    specification: removeIdToJson(cpu[0]),
  },
  {
    id: cpu[1].id,
    name: 'AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor',
    current_price: 459.0,
    category: 'CPU',
    manufacturer: 'AMD',
    part_number: '100-100000910WOF',
    specification: removeIdToJson(cpu[1]),
  },
  {
    id: cpu[2].id,
    name: 'Intel Core i9-14900K 3.2 GHz 24-Core Processor',
    current_price: 438.49,
    category: 'CPU',
    manufacturer: 'Intel',
    part_number: 'BX8071514900K',
    specification: removeIdToJson(cpu[2]),
  },
  {
    id: cooler[0].id,
    name: 'EK AIO Elite 360 D-RGB 66.04 CFM Liquid CPU Cooler',
    current_price: 157.49,
    category: 'Cooler',
    manufacturer: 'EK',
    part_number: 'EK-AIO Elite 360 D-RGB, 3831109829820',
    specification: removeIdToJson(cooler[0]),
  },
  {
    id: cooler[1].id,
    name: 'Cooler Master Hyper 212 Black Edition 42 CFM CPU Cooler',
    current_price: 31.48,
    category: 'Cooler',
    manufacturer: 'Cooler Master',
    part_number: 'RR-212S-20PK-R1',
    specification: removeIdToJson(cooler[1]),
  },
  {
    id: cooler[2].id,
    name: 'Noctua NH-D15 chromax.black 82.52 CFM CPU Cooler',
    current_price: 119.95,
    category: 'Cooler',
    manufacturer: 'Noctua',
    part_number: 'NH-D15 CHROMAX.BLACK, NH-D15 CH.BK, NH-D15-CH-BK',
    specification: removeIdToJson(cooler[2]),
  },
  {
    id: motherboard[0].id,
    name: 'MSI B760M GAMING PLUS WIFI Micro ATX LGA1700',
    current_price: null,
    category: 'Motherboard',
    manufacturer: 'MSI',
    part_number: 'B760M GAMING PLUS WIFI, 911-7D99-017, 7D99-017R, B760MGAPLWI',
    specification: removeIdToJson(motherboard[0]),
  },
  {
    id: motherboard[1].id,
    name: 'MSI MAG B650 TOMAHAWK WIFI ATX AM5 Motherboard',
    current_price: 179.99,
    category: 'Motherboard',
    manufacturer: 'MSI',
    part_number:
      'MAG B650 TOMAHAWK WIFI, 7D75-001R, B650TOMAHAWKWIFI, 911-7D75-001',
    specification: removeIdToJson(motherboard[1]),
  },
  {
    id: motherboard[2].id,
    name: 'Gigabyte Z790 AORUS ELITE AX ATX LGA1700 Motherboard',
    current_price: 199.99,
    category: 'Motherboard',
    manufacturer: 'Gigabyte',
    part_number: 'Z790 AORUS ELITE AX',
    specification: removeIdToJson(motherboard[2]),
  },
  {
    id: memory[0].id,
    name: 'Corsair Vengeance 32 GB (2 x 16 GB) DDR5-5600 CL36 Memory',
    current_price: 104.99,
    category: 'Memory',
    manufacturer: 'Corsair',
    part_number: 'CMK32GX5M2B5600C36',
    specification: removeIdToJson(memory[0]),
  },
  {
    id: memory[1].id,
    name: 'G.Skill Flare X5 32 GB (2 x 16 GB) DDR5-6000 CL30 Memory',
    current_price: 99.99,
    category: 'Memory',
    manufacturer: 'G.Skill',
    part_number: 'F5-6000J3038F16GX2-FX5',
    specification: removeIdToJson(memory[1]),
  },
  {
    id: memory[2].id,
    name: 'TEAMGROUP T-Create Expert 32 GB (2 x 16 GB) DDR5-6000 CL30 Memory',
    current_price: 84.99,
    category: 'Memory',
    manufacturer: 'TEAMGROUP',
    part_number: 'CTCED532G6000HC30DC01',
    specification: removeIdToJson(memory[2]),
  },
  {
    id: storage[0].id,
    name: 'Kingston NV2 500 GB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive',
    current_price: 37.99,
    category: 'Storage',
    manufacturer: 'Kingston',
    part_number: 'SNV2S/500G',
    specification: removeIdToJson(storage[0]),
  },
  {
    id: storage[1].id,
    name: 'Samsung 990 Pro 2 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive',
    current_price: '159.99',
    category: 'Storage',
    manufacturer: 'Samsung',
    part_number: 'MZ-V9P2T0BW, MZ-V9P2T0B/AM',
    specification: removeIdToJson(storage[1]),
  },
  {
    id: storage[2].id,
    name: 'Crucial P3 1 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive',
    current_price: 60.85,
    category: 'Storage',
    manufacturer: 'Crucial',
    part_number: 'CT1000P3SSD8',
    specification: removeIdToJson(storage[2]),
  },
  {
    id: videoCard[0].id,
    name: 'MSI VENTUS 2X BLACK OC GeForce RTX 4060 8 GB Video Card',
    current_price: 299.0,
    category: 'Video Card',
    manufacturer: 'MSI',
    part_number:
      'RTX 4060 VENTUS 2X BLACK 8G OC, GeForce RTX 4060 VENTUS 2X BLACK 8G OC, 912-V516-004, V516-004R, G4060V2XB8C',
    specification: removeIdToJson(videoCard[0]),
  },
  {
    id: videoCard[1].id,
    name: 'MSI GeForce RTX 3060 Ventus 2X 12G GeForce RTX 3060 12GB 12 GB Video Card',
    current_price: 279.99,
    category: 'Video Card',
    manufacturer: 'MSI',
    part_number:
      'RTX 4060 VENTUS 2X BLACK 8G OC, GeForce RTX 4060 VENTUS 2X BLACK 8G OC, 912-V516-004, V516-004R, G4060V2XB8C',
    specification: removeIdToJson(videoCard[1]),
  },
  {
    id: videoCard[2].id,
    name: 'Sapphire PULSE Radeon RX 7900 XT 20 GB Video Card',
    current_price: 649.98,
    category: 'Video Card',
    manufacturer: 'Sapphire',
    part_number: '11323-02-20G',
    specification: removeIdToJson(videoCard[2]),
  },
  {
    id: pcCase[0].id,
    name: 'Corsair 4000D Airflow ATX Mid Tower Case',
    current_price: 74.94,
    category: 'Case',
    manufacturer: 'Corsair',
    part_number: 'CC-9011200-WW',
    specification: removeIdToJson(pcCase[0]),
  },
  {
    id: pcCase[1].id,
    name: 'NZXT H5 Flow (2022) ATX Mid Tower Case',
    current_price: 59.99,
    category: 'Case',
    manufacturer: 'NZXT',
    part_number: 'CC-H51FW-01',
    specification: removeIdToJson(pcCase[1]),
  },
  {
    id: pcCase[2].id,
    name: 'Corsair iCUE 4000X RGB ATX Mid Tower Case',
    current_price: 97.98,
    category: 'Case',
    manufacturer: 'Corsair',
    part_number: 'CC-9011204-WW',
    specification: removeIdToJson(pcCase[2]),
  },
  {
    id: powerSupply[0].id,
    name: 'MSI MAG A650BN 650 W 80+ Bronze Certified ATX Power Supply',
    current_price: 49.99,
    category: 'Power Supply',
    manufacturer: 'MSI',
    part_number: 'MAG A650BN, 306-7ZP2B11-CE0',
    specification: removeIdToJson(powerSupply[0]),
  },
  {
    id: powerSupply[1].id,
    name: 'Corsair RM750e (2023) 750 W 80+ Gold Certified Fully Modular ATX Power Supply',
    current_price: 99.99,
    category: 'Power Supply',
    manufacturer: 'Corsair',
    part_number: 'CP-9020262-NA, CP-9020262-UK, CP-9020262-EU, CP-9020262-AU',
    specification: removeIdToJson(powerSupply[1]),
  },
  {
    id: powerSupply[2].id,
    name: 'MSI A1000G PCIE5 1000 W 80+ Gold Certified Fully Modular ATX Power Supply',
    current_price: 129.44,
    category: 'Power Supply',
    manufacturer: 'MSI',
    part_number: 'MPG A1000G PCIE 5, 306-7ZP7C11-CE0',
    specification: removeIdToJson(powerSupply[2]),
  },
  {
    id: monitor[0].id,
    name: 'BenQ GW2480 23.8" 1920 x 1080 60 Hz Monitor',
    current_price: null,
    category: 'Monitor',
    manufacturer: 'BenQ',
    part_number: 'GW2480, 9H.LGDLA.TBE, 9H.LGDLA.TBU',
    specification: removeIdToJson(monitor[0]),
  },
  {
    id: monitor[1].id,
    name: 'Dell Alienware AW3423DWF 34.2" 3440 x 1440 165 Hz Curved Monitor',
    current_price: 649.99,
    category: 'Monitor',
    manufacturer: 'Dell',
    part_number: 'AW3423DWF, W5HHN, 210-BFRQ, GAME-AW3423DWF',
    specification: removeIdToJson(monitor[1]),
  },
  {
    id: monitor[2].id,
    name: 'LG 27GL83A-B 27.0" 2560 x 1440 144 Hz Monitor',
    current_price: '189.99',
    category: 'Monitor',
    manufacturer: 'LG',
    part_number: '27GL83A-B',
    specification: removeIdToJson(monitor[2]),
  },
  // {
  //   id:,
  //   name:,
  //   current_price:,
  //   category:,
  //   manufacturer:,
  //   part_number:,
  // },
];

const pcBuilds = [
  {
    id: 'ba739067-1888-4017-908a-390583099f04',
    user_id: users[0].id,
    name: 'Build 1',
    created_at: '2024-11-29',
    is_private: false,
    allow_comments: false,
  },
  {
    id: '565ed09b-94bf-4b7e-9af9-b8ae6aa78624',
    user_id: users[0].id,
    name: 'Build 2',
    created_at: '2024-11-29',
    is_private: false,
    allow_comments: false,
  },
  {
    id: '55d76238-e69a-422a-9e26-d49778e38cd5',
    user_id: users[0].id,
    name: 'Build 3',
    created_at: '2024-11-29',
    is_private: false,
    allow_comments: false,
  },
];

const pcBuildsParts = [
  // build 1
  {
    id: 'ad68176e-6502-40e6-97a1-6e9210d2ac78',
    build_id: pcBuilds[0].id,
    part_id: cpu[0].id,
    quantity: 1,
  },
  {
    id: '8a15dfdb-e1a5-49a8-9089-86815cf56c0e',
    build_id: pcBuilds[0].id,
    part_id: cooler[0].id,
    quantity: 1,
  },
  {
    id: '145a5301-60f3-45c8-9004-8bdfb8ad08ed',
    build_id: pcBuilds[0].id,
    part_id: motherboard[0].id,
    quantity: 1,
  },
  {
    id: '1873797b-4d13-4374-b3e9-982ea13c35ff',
    build_id: pcBuilds[0].id,
    part_id: memory[0].id,
    quantity: 1,
  },
  {
    id: 'f6319038-7fda-4cf9-a9bf-c213562f789c',
    build_id: pcBuilds[0].id,
    part_id: storage[0].id,
    quantity: 1,
  },
  {
    id: 'f2f2f836-adf9-41c0-8de9-ba15140acd43',
    build_id: pcBuilds[0].id,
    part_id: videoCard[0].id,
    quantity: 1,
  },
  {
    id: '6c207604-85ab-4a39-a955-de90bcd9a8bc',
    build_id: pcBuilds[0].id,
    part_id: pcCase[0].id,
    quantity: 1,
  },
  {
    id: 'd7fcd120-49dc-4638-afc0-a01fc93ba5e4',
    build_id: pcBuilds[0].id,
    part_id: powerSupply[0].id,
    quantity: 1,
  },
  {
    id: 'beaf3b43-0212-4354-9aa2-e6240d8567cd',
    build_id: pcBuilds[0].id,
    part_id: monitor[0].id,
    quantity: 1,
  },
  // Build 2
  {
    id: '92f94344-ad02-408b-84f4-e4c4f4c6fab9',
    build_id: pcBuilds[1].id,
    part_id: cpu[1].id,
    quantity: 1,
  },
  {
    id: 'a77f9377-ae85-4455-a42b-99b3139b30d9',
    build_id: pcBuilds[1].id,
    part_id: cooler[1].id,
    quantity: 1,
  },
  {
    id: '3538bc68-1b66-4e8b-aea5-adabf0303aad',
    build_id: pcBuilds[1].id,
    part_id: motherboard[1].id,
    quantity: 1,
  },
  {
    id: '11186dc0-c955-42ae-823d-0ff80ef552d9',
    build_id: pcBuilds[1].id,
    part_id: memory[1].id,
    quantity: 1,
  },
  {
    id: 'dd6d758f-cab0-4ebb-86c3-aa3e207d99cd',
    build_id: pcBuilds[1].id,
    part_id: storage[1].id,
    quantity: 1,
  },
  {
    id: '6e1a2ae3-2936-490c-b02a-f0406cf0f551',
    build_id: pcBuilds[1].id,
    part_id: videoCard[1].id,
    quantity: 1,
  },
  {
    id: '1e4b8af0-6776-4e51-bff1-21af7557494c',
    build_id: pcBuilds[1].id,
    part_id: pcCase[1].id,
    quantity: 1,
  },
  {
    id: 'd5b8c813-ce56-4e7e-b8e0-b5b699fddf51',
    build_id: pcBuilds[1].id,
    part_id: powerSupply[1].id,
    quantity: 1,
  },
  {
    id: 'c254c28f-3290-4e03-855e-45d939f2e8e4',
    build_id: pcBuilds[1].id,
    part_id: monitor[1].id,
    quantity: 1,
  },
  // Build 3
  {
    id: '3d29e4bc-c6d5-4a60-bc2f-1afff7981f44',
    build_id: pcBuilds[2].id,
    part_id: cpu[2].id,
    quantity: 1,
  },
  {
    id: '3a501755-982c-40ea-bf54-28f117908b19',
    build_id: pcBuilds[2].id,
    part_id: cooler[2].id,
    quantity: 1,
  },
  {
    id: '626c2def-0f4a-4a57-a2a7-6a0a97574e8c',
    build_id: pcBuilds[2].id,
    part_id: motherboard[2].id,
    quantity: 1,
  },
  {
    id: '23ff75f7-e82a-43db-9dd1-258b9e118ee7',
    build_id: pcBuilds[2].id,
    part_id: memory[2].id,
    quantity: 1,
  },
  {
    id: '5537a3c8-875d-4647-a943-5599b501dce6',
    build_id: pcBuilds[2].id,
    part_id: storage[2].id,
    quantity: 1,
  },
  {
    id: '1f9e1423-daa1-44d3-befa-f2a608def4fa',
    build_id: pcBuilds[2].id,
    part_id: videoCard[2].id,
    quantity: 1,
  },
  {
    id: 'a8e43035-0a9f-4494-84f1-117b3ad51bec',
    build_id: pcBuilds[2].id,
    part_id: pcCase[2].id,
    quantity: 1,
  },
  {
    id: '917bf21b-5d49-4fd9-86e5-9174b461ca86',
    build_id: pcBuilds[2].id,
    part_id: powerSupply[2].id,
    quantity: 1,
  },
  {
    id: 'b1169ef0-4fdd-414d-92b3-c4db3a03a234',
    build_id: pcBuilds[2].id,
    part_id: monitor[2].id,
    quantity: 1,
  },
  // {
  //   id:,
  //   build_id: pcBuilds[0].id,
  //   part_id: memory[0].id,
  //   quantity: 1,
  // },
];

export { users, posts, comments, pcParts, pcBuilds, pcBuildsParts };
