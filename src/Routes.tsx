import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Github from "./pages/Github/index";
import Games from "./pages/Games/index";
import Works from "./pages/Works/index";
import Contato from "./pages/Contato/index";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/games" element={<Games />} />
                <Route path="/github" element={<Github />} />
                <Route path="/contatos" element={<Contato />} />
            </Routes>
        </Router>
    )
}
