import React from "react";
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes, 
  Route 
} from "react-router-dom";

import './App.css'
import Header from './components/Header'
import ListItem from "./components/ListItem";
import NotesListPage from './pages/NotesListPage'
// import NotePage from './pages/NotePage'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            {/* <div className="App"> */}
              {/* <Header /> */}
              <Route  path="/notes" element={<NotesListPage />} />
            {/* </div> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
