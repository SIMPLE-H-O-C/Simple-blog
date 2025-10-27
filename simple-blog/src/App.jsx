import BillBoardHero from "./components/BillBoardHero";
import SiteNavbar from "./components/Navbar";
import RecentPosts from "./components/RecentPosts";

function App() {
  return (
    <div className="App">
      <SiteNavbar />
      <BillBoardHero />
      <RecentPosts />
    </div>
  );
}

export default App;
