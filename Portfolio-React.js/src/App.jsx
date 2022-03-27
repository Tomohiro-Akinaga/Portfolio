import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./pages/Top/Top";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="top" element={<Top />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
