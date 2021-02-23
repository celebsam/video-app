import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StreamList from "./components/Streams/StreamList";
import StreamShow from "./components/Streams/StreamShow";
import StreamCreate from "./components/Streams/StreamCreate";
import Error from "./error";
import StreamDelete from "./components/Streams/StreamDelete";
import StreamEdit from "./components/Streams/StreamEdit";
import Header from "./components/Header";
function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header />
            <Switch>
               <div>
                  <Route path={"/"} exact component={StreamList} />
                  <Route path={"/streams/show"} exact component={StreamShow} />
                  <Route path={"/streams/new"} exact component={StreamCreate} />
                  <Route path={"/streams/edit"} exact component={StreamEdit} />
                  <Route
                     path={"/streams/delete"}
                     exact
                     component={StreamDelete}
                  />
               </div>
               <Route component={Error} />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
