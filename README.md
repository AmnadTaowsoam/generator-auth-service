# generator-auth-service

Yeoman generator สำหรับ scaffold โปรเจกต์ Auth-service แบบ TypeScript + Docker + Swagger

## Prerequisites

* Node.js (>=14) และ npm หรือ Yarn
* Yeoman CLI

  ```bash
  npm install -g yo
  # หรือ
  yarn global add yo
  ```

## การติดตั้ง Generator (สำหรับใช้งาน)

### วิธีที่ 1: ติดตั้งจาก Git URL

```bash
npm install -g git+https://github.com/AmnadTaowsoam/generator-auth-service.git
# หรือ SSH
npm install -g git+ssh://git@github.com/AmnadTaowsoam/generator-auth-service.git
```

### วิธีที่ 2: Clone + npm link (สำหรับพัฒนา/ทดสอบ)

```bash
git clone https://github.com/AmnadTaowsoam/generator-auth-service.git
cd generator-auth-service
npm install           # หรือ yarn install
npm link
```

## การสร้างโปรเจกต์ Auth-service

1. ไปยังโฟลเดอร์ที่ต้องการวางโปรเจกต์ใหม่

   ```bash
   mkdir my-auth-service
   cd my-auth-service
   ```
2. รัน Yeoman generator

   ```bash
   yo auth-service
   ```
3. ตอบคำถามที่ปรากฏ:

   * **Service name**: ชื่อโฟลเดอร์และโปรเจกต์ (เช่น `user-auth`)
   * **Port to run on**: พอร์ตสำหรับรันเซอร์วิส (ค่า default `3000`)

ระบบจะสร้างโครงสร้างโปรเจกต์ พร้อมติดตั้ง dependencies ให้เรียบร้อย

## ใช้งานโปรเจกต์ที่สร้างขึ้น

1. เข้าไปในโฟลเดอร์โปรเจกต์

   ```bash
   cd <service-name>
   ```
2. รันในโหมดพัฒนา (ts-node-dev)

   ```bash
   npm install        # กรณีไม่ได้ติดตั้งอัตโนมัติ
   npm run dev        # หรือ yarn dev
   ```
3. เปิดเบราว์เซอร์ไปที่ [http://localhost](http://localhost):<port>

   * API ใช้งานที่ `http://localhost:<port>/api`
   * Swagger UI: `http://localhost:<port>/api-docs`

หรือรันใน Docker:

```bash
docker build -t <service-name> .
docker run -p <port>:<port> <service-name>
```

## Scripts

| Script  | คำสั่ง                                | คำอธิบาย                      |
| ------- | ------------------------------------- | ----------------------------- |
| `dev`   | `ts-node-dev --respawn src/server.ts` | รันในโหมดพัฒนาด้วย TypeScript |
| `start` | `node dist/server.js`                 | รันโค้ด transpiled จาก dist   |
| `build` | `tsc`                                 | Build โปรเจกต์เป็น JavaScript |
| `lint`  | `eslint . --ext .ts`                  | ตรวจ lint โค้ด TypeScript     |

## การทดสอบ Generator

ในโฟลเดอร์ generator-auth-service รัน:

```bash
npm test
```

* ใช้ `yeoman-test` กับ `yeoman-assert` ตรวจว่าไฟล์ถูกสร้างและค่าถูก inject ตาม spec

## Versioning & Changelog

* ใช้ [Semantic Versioning](https://semver.org/)
* เมื่อออกเวอร์ชันใหม่ ให้รัน:

  ```bash
  npm version <patch|minor|major>
  git push --follow-tags
  ```
* อัปเดต `CHANGELOG.md` ตาม [Keep a Changelog](https://keepachangelog.com/)

## Contributing

PRs ยินดีรับเสมอ:

1. Fork โปรเจกต์
2. สร้าง branch ใหม่ (`git checkout -b feature/YourFeature`)
3. เขียนโค้ดและทดสอบ เพิ่ม unit tests
4. รัน `npm test` ให้ผ่าน
5. สร้าง PR และรอ review

## License

MIT © AmnadTaowsoam
