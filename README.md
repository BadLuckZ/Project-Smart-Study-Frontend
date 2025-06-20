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
- Push โค้ดทั้งหมดขึ้น GitHub (มี `env.md` ชี้แจง `.env`)

### Day 4

- เพิ่มการแสดง UserToken ใน DashboardPage และคัดลอกอัตโนมัติเมื่อกดที่ UserToken (เพื่อนำไปเป็น Bearer Token)

### Day 5

- นำ UserToken ใน Dashboard Page ออก
- สร้างฟังก์ชัน `fetchUserData` ด้วย Axios เพื่อเรียก API `/api/user/me` ที่ Backend (แนบ Bearer Token ใน header)
- เก็บข้อมูล user ที่ได้จาก Backend ใน `AuthProvider`
- สร้าง Account Page สำหรับแสดงชื่อ อีเมล และรูปภาพผู้ใช้ที่ล็อกอิน และปุ่ม Logout
- สร้าง Navbar Component ที่ navigate หน้า Dashboard กับหน้า Account
- ทดสอบ Logout แล้วป้องกันการเข้าถึงข้อมูล user (Redirect กลับมาที่ `/`)
- Layout และ Navbar รองรับ Responsive Design

### Day 6

- เพิ่ม Dark Theme ของ Shadcn
- หากไม่มี User จะ Redirect ไปที่ Login Page (`/login`)

---

## หมายเหตุ

- พัฒนาเพื่อใช้ร่วมกับ Backend: [Project-Smart-Study-Backend](https://github.com/BadLuckZ/Project-Smart-Study-Backend)
