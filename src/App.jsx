import './App.css';
import { HashRouter, NavLink, Routes, Route, useNavigate, useParams, Outlet } from 'react-router-dom';

const Logout = () => {
  let navigate = useNavigate()
  return <button onClick={() => navigate("/login")}>Logout</button>
}
const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const PostPage = () => {
  let params = useParams();
  return <p>Post ID: {params.postId}</p>
};
const Posts = () => {
  return (
    <>
      <h2>Post 頁面</h2>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/posts/post123">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/posts" element={<Posts />}>
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
