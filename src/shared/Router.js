import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Mypage from '../pages/Mypage';
function Router() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/mypage" element={<Mypage />}></Route>
        {/* <Route path="/postWrite" element={<PostWrite />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;