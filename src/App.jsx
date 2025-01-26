import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";
import AddBlog from "./pages/blog/AddBlog";
import Register from "./pages/auth/Register";
import Home from "./pages/blog/Home";
import EditBlog from "./pages/blog/EditBlog";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
