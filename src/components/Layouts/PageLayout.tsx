import { Outlet } from "react-router";

export const PageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[550px] mx-auto">
      <div className="flex-1 overflow-hidden h-full bg-red-400">
        <Outlet />
      </div>
    </div>
  );
};
