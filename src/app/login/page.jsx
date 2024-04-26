"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="flex justify-center h-full items-center">
        <div className="p-4 bg-red-100 rounded-md">
          <div className="flex justify-center">
            <img
              src="https://malee.littleduck.work/src/assets/images/logo.svg"
              alt=""
              width={100}
            />
          </div>
          <div className="text-center py-2 text-xl font-semibold">
            เข้าสู่ระบบ
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <div className="w-[5rem]">ชื่อผู้ใช้</div>
              <div className="card flex justify-content-center">
                <InputText
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-[5rem]">รหัสผ่าน</div>
              <div className="card flex justify-content-center">
                <div className="flex flex-col gap-2">
                  <Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    toggleMask
                    feedback={false}
                  />
                  <Button
                    label="ตกลง"
                    onClick={() => router.push("/mainmenu")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
