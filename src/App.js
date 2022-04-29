
import "./scss/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  routes from "./config/routes"

function App() {

  return(
<>
  <Router>
    <Routes>
     {routes.map((route, index) => (
            <Route
              key={index}
              path={route.patch}
              element={<route.component />}
            />
          ))}

    </Routes>

  </Router>
  </>
  )
}

export default App;
