import React from "react";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from './screens/About'
import Login from './screens/Login'
import Error from './screens/Error'
import Course from "./screens/Course";
import Cart from './screens/Cart'
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* Everything need to be closed under Browserrouter */}
      <Main>
        <Header />
        {/* Then which is going to be route has to b eclosed under routes */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/courses" element={<Course/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
