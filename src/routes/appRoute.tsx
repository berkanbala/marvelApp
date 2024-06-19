import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages/home/home";
import { AppLayout } from "../layout/appLayout";
import { CharacterDetails } from "../pages/characterDetails/characterDetails";
import { NotFound } from "../pages/notfound/notFound";

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<CharacterDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
