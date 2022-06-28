import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//css
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//pages
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import User from "./pages/User";
import Batch from "./pages/Batch";
import Activeemployees from "./pages/Activeemployees";
import Inactiveemployees from "./pages/Inactiveemployees";
import Configuration from "./pages/Configuration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />  
          <Route path="dashboard" element={<Home/>} />  
          <Route path="users" element={<User/>} />  
          <Route path="batch" element={<Batch/>} />  
          <Route path="active" element={<Activeemployees/>} /> 
          <Route path="inactive" element={<Inactiveemployees/>} /> 
          <Route path="configuration" element={<Configuration/>} /> 
          </Route>
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;