# My Adaptive Question Generator & Problem Solver - Frontend

โปรเจกต์ Frontend สำหรับระบบสร้างและฝึกฝนชุดคำถามอัตโนมัติด้วย AI
พัฒนาด้วย Next.js, Tailwind CSS, และ Shadcn/UI

## Tech Stack

- Next.js 14+
- React 18+
- Tailwind CSS
- Shadcn/UI
- (เตรียมต่อยอด: Zod, TanStack Query, Firebase Authentication)

## Getting Started

1. Clone Repository

   ```bash
   git clone https://github.com/BadLuckZ/Project-Smart-Study-Frontend.git
   cd Project-Smart-Study-Frontend
   ```

2. ติดตั้ง Dependency

   ```bash
   npm install
   # หรือ
   yarn install
   ```

3. Run Development Server
   ```bash
   npm run dev
   # หรือ
   yarn dev
   ```
   เริ่มต้นเซิร์ฟเวอร์ที่ `localhost:3000`

---

## Workday Progress

### Day 1

- สร้าง Next.js Project ด้วย `npx create-next-app@latest`
- ติดตั้ง Tailwind CSS และ Shadcn/UI
- ทดสอบรัน Development Server (`npm run dev`) แสดงหน้าแรกได้สำเร็จ
- สร้างไฟล์ `.gitignore` และ `README.md` สำหรับ Next.js โปรเจกต์
- Push โค้ดเริ่มต้นขึ้น GitHub

### Day 2

- ไม่มีส่วนที่แก้ไข Frontend

### Day 3

- ตั้งค่า Firebase Project + เปิด Google Auth
- ติดตั้ง Firebase SDK
- สร้างไฟล์ config สำหรับ Firebase
- สร้างหน้า Login และปุ่ม Google Sign-in
- Redirect เมื่อ Login สำเร็จ
- Push โค้ดทั้งหมดขึ้น GitHub (มี env.md ชี้แจง ENV)

---

## หมายเหตุ

- พัฒนาเพื่อใช้ร่วมกับ Backend: [Project-Smart-Study-Backend](https://github.com/BadLuckZ/Project-Smart-Study-Backend)
