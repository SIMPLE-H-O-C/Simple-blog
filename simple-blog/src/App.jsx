import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Components
import "bootstrap/dist/css/bootstrap.min.css";
import BillBoardHero from "./components/BillBoardHero";
import Footer from "./components/Footer";
import SiteNavbar from "./components/Navbar";
import RecentPosts from "./components/RecentPosts";

// Pages
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar should always be visible */}
        <SiteNavbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <BillBoardHero />
                <RecentPosts />
              </>
            }
          />

          {/* All Posts Page */}
          <Route path="/posts" element={<AllPosts />} />

          {/* Single Post Page */}
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
