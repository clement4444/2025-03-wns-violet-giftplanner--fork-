import { Route, Routes, Outlet } from "react-router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import { useGetMeProfileLazyQuery } from "./generated/graphql-types";
import { useMyProfilStore } from "./zustand/myProfilStore";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [getMeProfileQuery, { data }] = useGetMeProfileLazyQuery();
  const { setUserProfil, userProfil } = useMyProfilStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getMeProfileQuery();
        console.log(res);
        if (data) {
          setUserProfil(data.getMeProfile);
        } else {
          setUserProfil(null);
        }
      } catch {
        setUserProfil(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);
  console.log(userProfil);

  if (loading) return <p>Chargement...</p>;

  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomePage />} />
        <Route path="connexion" element={<LoginPage />} />
        <Route path="inscription" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
