import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import About from "./components/About";
import Form from "./components/Form";

import Button from "./components/Button";

const Layout = () => (
  <div>
    <NavBar />
    <Main>
      <Outlet />
    </Main>
    <Button />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="About" element={<About />} />
          <Route path="Button" element={<Button />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
