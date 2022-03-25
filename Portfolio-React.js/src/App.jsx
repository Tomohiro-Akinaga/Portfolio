// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {
    return (
        <>
            <Header />
            {/* <BrowserRouter>
                <Routes>
                    // <Route path="/" element={<Top />} />
                    // <Route path="top" element={<Top />} />
                    // <Route path="about" element={<About />} />
                    // <Route path="work" element={<Work />} />
                    // <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter> */}
            <Footer />
        </>
    );
}
