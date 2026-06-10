import { Outlet } from "react-router";

export const PageLayout = () => {
  return (
    <div className="flex flex-col h-screen max-w-[450px] mx-auto">
      {/* <div className="flex-1 overflow-hidden h-full"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};
