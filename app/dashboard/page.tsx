"use client";

import Navbar from "@/components/navbar";
import { useAuth } from "@/context/auth-context";

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-2xl font-bold">
          {`Hello ${user?.displayName} (${user?.email})! This is Dashboard Page`}
        </h1>
      </div>
    </>
  );
};

export default DashboardPage;
