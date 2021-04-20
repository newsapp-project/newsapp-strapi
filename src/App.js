import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import NewsList from "./pages/NewsList";
import NewsView from "./pages/NewsView";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <head>
          <title>News24</title>
          <link rel="icon" href="/favicon.ico" />
        </head>

        <main className="main">
          <BrowserRouter>
            <Switch>
              <Route path="/news">
                <NewsList />
              </Route>
              <Route path="/newsview/:id">
                <NewsView />
              </Route>
              <Route exact path="/">
                <Redirect to="/news" />
              </Route>
              <Route path="*">
                <NewsList />
              </Route>{" "}
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    </>
  );
}

export default App;
