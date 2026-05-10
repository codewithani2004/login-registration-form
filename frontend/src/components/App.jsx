/* login page white background */

// import Home from './Home';
// import Login from './Login';
// import Register from './Register';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Register />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/home" element={<Home />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;



/* login page blue background */
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;