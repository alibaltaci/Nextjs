import { Route, Routes } from "react-router-dom";

//pages
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

// naviation
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>

      <MainNavigation />

      <Routes>
        <Route path="/" exact element={ <AllMeetupsPage /> } />
        <Route path="/new-meetup" element={ <NewMeetupPage /> } />
        <Route path="/favorites" element={ <FavoritesPage /> } />
      </Routes>

    </div>
  );
}

export default App;
