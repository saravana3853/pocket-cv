// App.js

import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Contact";
import Divider from "./Components/Divider";
import Work from "./Components/Work";
import Summary from "./Components/Summary";

import "./index.css";
function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <Summary/>
            <Work />
            <Divider/>
            <Contact />
            <Divider/>
        </div>
    );
}

export default App;

