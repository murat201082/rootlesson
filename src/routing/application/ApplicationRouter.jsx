import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationIndex from "../module/NavigationIndex";
import NavigationTarget from "../module/NavigationTarget";
import NavigationSource from "../module/NavigationSource";
import ApplicationLayout from "./ApplicationLayout";
import MuiComponent from "../module/MuiComponent";

export default function ApplicationRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationLayout />}>
          <Route path="/source"element={<NavigationSource />} />
          <Route index element={<NavigationIndex />} />
          <Route path = "/target" element={<NavigationTarget/>}/>
          <Route path = "/target/:id" element={<NavigationTarget/>}/>
          <Route path = "/mui" element={<MuiComponent/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
