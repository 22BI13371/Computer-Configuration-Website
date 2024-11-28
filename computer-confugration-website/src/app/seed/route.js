// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// import { users, posts, comments } from '../lib/placeholder_data';

// const client = await db.connect();

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       username  VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL,
//       is_admin BOOLEAN NOT NULL DEFAULT false,
//       created_at VARCHAR NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedpassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//       INSERT INTO users (id, username, email, password, is_admin, created_at)
//       VALUES (${user.id}, ${user.username}, ${user.email}, ${hashedpassword}, ${user.is_admin}, ${user.created_at})
//       ON CONFLICT (id) DO NOTHING
//       `;
//     })
//   );

//   return insertedUsers;
// }

// async function seedPosts() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST posts (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       user_id UUID NOT NULL,
//       title TEXT NOT NULL,
//       body TEXT NOT NULL,
//       created_at VARCHAR NOT NULL,
//       updated_at VARCHAR,
//       FOREIGN KEY user_id REFERENCES users
//     );
//   `;

//   const insertedPosts = await Promise.all(
//     posts.map(
//       (post) => client.sql`
//         INSERT INTO posts (id, user_id, title, body, created_at, updated_at)
//         VALUES (${post.id}, ${post.user_id}, ${post.title}, ${post.body}, ${post.created_at}, ${post.updated_at})
//         ON CONFLICT (id) DO NOTHING
//       `
//     )
//   );

//   return insertedPosts;
// }

// async function seedComments() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       post_id UUID NOT NULL,
//       user_id UUID NOT NULL,
//       text TEXT NOT NULL,
//       created_at VARCHAR,
//       FOREIGN KEY user_id  REFERENCES users,
//       FOREIGN KEY post_id  REFERENCES posts
//     );
//   `;

//   const insertedComments = await Promise.all(
//     comments.map(
//       (comment) => client.sql`
//       INSERT INTO comments (id, post_id, user_id, text, created_at)
//       VALUES (${comment.id}, ${comment.post_id}, ${comment.user_id}, ${comment.text}, ${comment.created_at})
//       ON CONFLICT (id) DO NOTHING
//     `
//     )
//   );

//   return insertedComments;
// }

// async function seedPcBuild() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       user_id UUID NOT NULL,
//       created_at VARCHAR,
//       FOREIGN KEY user_id REFERENCES users
//     );
//   `;
// }

// async function seedPcPart() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name TEXT NOT NULL,
//       current_price INTEGER, NOT NULL,
//       category TEXT NOT NULL,
//       manufacturer TEXT NOT NULL,
//       part_number TEXT NOT NULL
//     );
//   `;
// }

// async function seedCpu() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       series TEXT NOT NULL,
//       micro_architecture TEXT NOT NULL,
//       core_fanily TEXT NOT NULL,
//       core_count INT NOT NULL,
//       thread_count INT NOT NULL,
//       socket TEXT NOT NULL,
//       performance_core_clock INT NOT NULL,
//       performance_core_boost_clock INT,
//       efficiency_core_clock INT,
//       efficiency_core_boost_clock INT,
//       l2_cache INT NOT NULL,
//       l3_cache INT NOT NULL,
//       tdp INT NOT NULL,
//       integrated_graphics TEXT,
//       max_supported_memory INT NOT NULL,
//       ecc_support BOOLEAN NOT NULL,
//       includes_cooler BOOLEAN NOT NULL,
//       packaging TEXT NOT NULL,
//       lithography int NOT NULL,
//       includes_cpu_cooler BOOLEAN NOT NULL,
//       simultaneous_multithreading BOOLEAN NOT NULL
//     );
//   `;
// }

// async function seedCooler() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       fan_rpn TEXT NOT NULL,
//       noise_level TEXT NOT NULL,
//       color TEXT NOT NULL,
//       height INT,
//       cpu_socket TEXT NOT NULL,
//       water_cooled BOOLEAN NOT NULL,
//       fanless BOOLEAN NOT NULL
//     );
//   `;
// }

// async function seedMotherboard() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       cpu_socket TEXT NOT NULL,
//       form_factor TEXT NOT NULL,
//       chipset TEXT NOT NULL,
//       max_memory INT NOT NULL,
//       memory_type TEXT NOT NULL,
//       memory_slot INT NOT NULL,
//       memory_speed TEXT NOT NULL,
//       color TEXT NOT NULL,
//       pcie_x16_slots INT NOT NULL,
//       pcie_x8_slots INT NOT NULL,
//       pcie_x4_slots INT NOT NULL,
//       pcie_x1_slots INT NOT NULL,
//       pci_slots INT NOT NULL,
//       m2_slots TEXT NOT NULL,
//       mini_pcie_slots INT NOT NULL,
//       mini_pcie_msata_slots INT NOT NULL,
//       msata_slots INT NOT NULL,
//       sata_60gb_s INT NOT NULL,
//       onboard_ethernet TEXT NOT NULL,
//       onboard_video TEXT NOT NULL,
//       usb_20_headers INT NOT NULL,
//       usb_20_headers_single_port INT NOT NULL,
//       usb_32_gen1_headers INT NOT NULL,
//       usb_32_gen2_headers INT NOT NULL,
//       usb_32_gen22_headers INT NOT NULL,
//       suppport_ecc BOOLEAN NOT NULL,
//       wireless_networking TEXT NOT NULL,
//       raid_support BOOLEAN NOT NULL,
//       uses_back_connect_connectors BOOLEAN NOT NULL
//     );
//   `;
// }

// async function seedMemory() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       speed TEXT NOT NULL,
//       form_factor TEXT NOT NULL,
//       modules TEXT NOT NULL,
//       price_gb INT NOT NULL,
//       color TEXT NOT NULL,
//       first_word_latency INT NOT NULL,
//       cas_latency INT NOT NULL,
//       voltage INT NOT NULL,
//       timing TEXT NOT NULL,
//       ecc_registered TEXT NOT NULL,
//       heat_spreader BOOLEAN NOT NULL
//     );
//   `;
// }

// async function seedStorage() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       capacity INT NOT NULL,
//       price_per_gb INT NOT NULL,
//       type TEXT NOT NULL,
//       cache INT NOT NULL,
//       form_factor TEXT NOT NULL,
//       interface TEXT NOT NULL,
//       nvme BOOLEAN NOT NULL,
//       ssd_nand_flash_type TEXT NOT NULL
//     );
//   `;
// }

// async function seedVideoCard() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       chipset TEXT NOT NULL,
//       memory INT NOT NULL,
//       memory_type TEXT NOT NULL,
//       core_clock INT NOT NULL,
//       boost_clock INT NOT NULL,
//       effective_memory_clock INT NOT NULL,
//       interface TEXT NOT NULL,
//       color TEXT NOT NULL,
//       frame_sync TEXT NOT NULL,
//       length INT NOT NULL,
//       tdp INT NOT NULL,
//       case_expansion_slot_width INT NOT NULL,
//       total_slot_width INT NOT NULL,
//       cooling TEXT NOT NULL,
//       external_power TEXT NOT NULL,
//       display_port_14a_output INT NOT NULL,
//       hdmi_21a_out[uts] INT NOT NULL
//     );
//   `;
// }

// async function seedCase() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       type TEXT NOt NULL,
//       color TEXT NOt NULL,
//       power_supply TEXT,
//       side_panel TEXT NOT NULL,
//       power_supply_shroud TEXT NOT NULL,
//       front_panel_usb TEXT NOT NULL,
//       motherboard_form_factor TEXT NOT NULL,
//       max_video_card_length TEXT NOT NULL,
//       drive_bays TEXT NOT NULL,
//       expansion_slots TEXT NOT NULL,
//       dimensions TEXT NOT NULL,
//       volume TEXT NOT NULL
//     );
//   `;
// }

// async function seedPowerSupply() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       type TEXT NOt NULL,
//       efficiency_rating TEXT NOT NULL,
//       wattage INT NOT NULL,
//       length INT NOT NULL,
//       modular TEXT NOT NULL,
//       color TEXT NOT NULL,
//       fanless BOOLEAN NOT NULL,
//       atx_4_pin_connectors INT NOT NULL,
//       eps_8_pin_connectors INT NOT NULL,
//       pcie_12_4_pin_12vhpwrd_connectors INT NOT NULL,
//       pcie_12_pin_connectors INT NOT NULL,
//       pcie_8_pin_connectors INT NOT NULL,
//       pcie_6_2_pin_connectors INT NOT NULL,
//       pcie_6_pin_connectors INT NOT NULL,
//       sata_connectors INT NOT NULL,
//       molex_4_pin_connectors INT NOT NULL
//     );
//   `;
// }

// async function seedMonitor() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXIST comments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       screen_size INT NOT NULL,
//       resolution TEXT NOT NULL,
//       refresh_rate INT NOT NULL,
//       response_time INT NOT NULL,
//       panel_type TEXT NOT NULL,
//       aspect_ratio TEXT NOT NULL,
//       color TEXT NOT NULL,
//       brightness INT NOT NULL,
//       pixel_pitch INT NOT NULL,
//       widescreen BOOLEAN NOT NULL,
//       curved_screen BOOLEAN NOT NULL,
//       curvature_radius TEXT,
//       frame_sync TEXT NOT NULL,
//       built_in_speaker BOOLEAN NOT NULL,
//       viewing_radius TEXT NOT NULL,
//       inputs TEXT NOT NULL,
//       vesa_mounting TEXT,
//       hdr_tier TEXT
//     );
//   `;
// }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedUsers();
//     await seedPosts();
//     await seedComments();
//     await client.sql`COMMIT`;

//     return Response.json({ message: 'Database seeded successfully' });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
