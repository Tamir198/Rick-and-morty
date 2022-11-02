import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { URLS } from "constants/url";

const Home = lazy(() => import("pages/Home"));
const CharacterGallery = lazy(() => import("pages/CharacterGallery"));
const CharacterSearch = lazy(() => import("pages/CharacterSearch"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));

export const AppRouter = () => (
  <Suspense fallback={<>"Loading..."</>}>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path={URLS.HOME} element={<Home />} />
        <Route path={URLS.ALL_CHARACTERS} element={<CharacterGallery />} />
        <Route path={URLS.SINGLE_CHARACTER} element={<CharacterSearch />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Suspense>
);
