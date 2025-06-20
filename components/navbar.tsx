"use client";

import { Button } from "./ui/button";
import { Home, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navigationItems = [
  { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: Home },
  { id: "account", label: "Account", path: "/account", icon: User },
];

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const onNavigate = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="grid grid-cols-2 gap-1 p-2">
        {navigationItems.map((item) => {
          return (
            <Button
              key={item.id}
              variant={item.path === pathName ? "default" : "ghost"}
              size="sm"
              className="flex flex-col items-center justify-center h-16 relative cursor-pointer"
              onClick={() => {
                onNavigate(item.id);
              }}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <p className="text-xs text-center">{item.label}</p>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
