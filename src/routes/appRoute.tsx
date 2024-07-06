import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { CharacterDetails } from "../pages/characterDetails/characterDetails";
import { AppLayout } from "../layout/appLayout";
import { NotFound } from "../pages/notfound/notFound";
import { Home } from "../pages/home/home";

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
