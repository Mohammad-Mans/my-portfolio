import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, MissingPage } from "./pages";
import { AdminHomePage, AdminLoginPage } from "./pages/Admin";
import HomeLayout from "./components/layout/HomeLayout";
import AdminLayout from "./components/layout/AdminLayout";
import AdminRoute from "./components/routes/AdminRoute";
import { AuthProvider } from "./context/Auth/AuthContext";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          element={
            <AdminRoute allowedEmails={["mohammad.mans2002@gmail.com"]} />
          }
        >
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHomePage />} />
          </Route>
        </Route>

        <Route path="*" element={<MissingPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
