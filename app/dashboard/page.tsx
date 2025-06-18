"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

const DashboardPage = () => {
  const { user, handleSignout } = useAuth();
  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-2xlfont-bold">
        {`Hello ${user?.displayName} (${user?.email})! This is Dashboard Page`}
      </h1>
      <Button variant={"destructive"} onClick={handleSignout}>
        Sign out
      </Button>
    </div>
  );
};
export default DashboardPage;
