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
          {`Welcone to Smart Study, ${user?.displayName}!`}
        </h1>
      </div>
    </>
  );
};

export default DashboardPage;
