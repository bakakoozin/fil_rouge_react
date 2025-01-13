import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/style/index.scss";
import App from "./App";
import AuthProvider from "./App/AuthProvider";
import ThemeProvider from "./App/ThemeProvider.jsx";
import CartProvider from "./App/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </AuthProvider>
);
