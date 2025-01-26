import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";
import AddBlog from "./pages/blog/AddBlog";
import Register from "./pages/auth/Register";
import Home from "./pages/blog/Home";
import EditBlog from "./pages/blog/EditBlog";
import Kurthawali from "./pages/love/Kurthawali";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/add" element={<AddBlog />} />
          <Route path="/blog/edit" element={<EditBlog />} />
          <Route path="/special" element={<Kurthawali />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
