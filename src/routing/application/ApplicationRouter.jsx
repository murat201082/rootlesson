import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationIndex from "../module/NavigationIndex";
import NavigationSource from "../module/NavigationSource";
import ApplicationLayout from "./ApplicationLayout";

export default function ApplicationRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationLayout />}>
          <Route index element={<NavigationIndex />} />
          <Route path="/source"element={<NavigationSource />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
