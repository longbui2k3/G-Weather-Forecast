import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageHome } from "./pages/PageHome";
import { PageHistory } from "./pages/PageHistory";
import { PageConfirm } from "./pages/PageConfirm";
import { PageUnsubscribe } from "./pages/PageUnsubscribe";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/history" element={<PageHistory />} />
        <Route path="/confirm/:tokenConfirm" element={<PageConfirm />} />
        <Route path="/unsubscribe/:tokenUnsubscribe" element={<PageUnsubscribe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
