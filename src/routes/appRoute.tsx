import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { CharacterDetails } from "../pages/characterDetails/characterDetails";
import { NotFound } from "../pages/notfound/notFound";
import { AppLayout } from "../layout/appLayout";

export const AppRoute = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/details:id"
          element={
            <CharacterDetails
              character={{
                id: "",
                name: "",
                thumbnail: {
                  path: "",
                  extension: "",
                },
              }}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
