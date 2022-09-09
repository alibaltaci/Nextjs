import { Route, Routes } from "react-router-dom";

//pages
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>

      <Routes>
        <Route path="/" exact element={ <AllMeetupsPage /> } />
        <Route path="/new-meetup" element={ <NewMeetupPage /> } />
        <Route path="/favorites" element={ <FavoritesPage /> } />
      </Routes>

    </Layout>

  );
}

export default App;
