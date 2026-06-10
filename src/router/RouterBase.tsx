import { PageLayout } from "@/components/Layouts/PageLayout";
import { WelcomePage } from "@/pages/WelcomePage";
import { createBrowserRouter } from "react-router";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <WelcomePage />,
      },
    ],
  },
]);
