import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Feed from "./pages/feed/Feed";
import LoginPage from "./pages/Login/Login";

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' exact element={<LoginPage/>}/>
            <Route path='/feed' exact element={<Feed/>}/>
        </Routes>
    </Router>
  );
}

export default App;
