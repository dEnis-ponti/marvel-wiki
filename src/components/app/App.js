import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {MainPage, ComicsPage, Page404, SingleComicPage} from "../pages";
import AppHeader from '../appHeader/AppHeader';

const App = () => {



  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route element={<MainPage />} path="/">
            </Route>
            <Route element={<ComicsPage />} path="/comics">
            </Route>
            <Route element={<SingleComicPage />} path="/comics/:comicId" />
            <Route element={<Page404 />} path="*">
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;
