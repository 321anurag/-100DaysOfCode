import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <Navbar />
      <div class="grid-container">
        <div class="grid-child">
          <Search searchType={"Countries"} />
        </div>
        <div class="grid-child">
          <Search searchType={"States"} />
        </div>
        <div class="grid-child">
          <Search searchType={"Cities"} />
        </div>
      </div>
    </>
  );
}

export default App;
