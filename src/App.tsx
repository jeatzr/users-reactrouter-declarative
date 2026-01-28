import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users">
          <Route index element={<Users />} />
          <Route path=":userId" element={<UserDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
