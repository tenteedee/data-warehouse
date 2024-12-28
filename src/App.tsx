import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import SignIn from './pages/Sign-in/SignIn';
import PostPage from './pages/Post/PostsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signin" element={<SignIn />} />

        <Route path="/post" element={<PostPage />} />

        <Route
          path="*"
          element={
            <h1 className="text-3xl font-bold text-[#212353] text-center">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
