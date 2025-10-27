import BillBoardHero from "./components/BillBoardHero";
import SiteNavbar from "./components/Navbar";
import RecentPosts from "./components/RecentPosts";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <SiteNavbar />
      <BillBoardHero />
      <RecentPosts />
      <Footer />
    </div>
  );
}

export default App;
