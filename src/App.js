import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const App = () => {
  const pageSize = 20;
 const  apiKey = process.env.REACT_APP_NEWS_API


  const [progress , setProgress] = useState(0);

    return (
     
      <div>
      
        <Router>
          <Navbar />
        
          <LoadingBar
            color="#f11946"
            height={4}
            progress={progress}
          />
        
          <Switch>
            <Route exact path="/">  
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pazeSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pazeSize={pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pazeSize={pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pazeSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pazeSize={pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pazeSize={pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pazeSize={pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
            
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pazeSize={pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
export default App;
