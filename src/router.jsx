import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);

export default router;
