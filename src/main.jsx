import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@redux/store";
import router from "./router";
import GlobalStyles from "@components/GlobalStyles/GlobalStyles";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <GlobalStyles>
                <RouterProvider router={router} />
            </GlobalStyles>
        </Provider>
    </StrictMode>
);
