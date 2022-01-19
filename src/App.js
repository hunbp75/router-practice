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
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="reservation-form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
