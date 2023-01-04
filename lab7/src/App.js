import {Routes, Route} from "react-router-dom";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Layout from "./pages/Layout/Layout";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/task1" element={<Task1/>}/>
                    <Route path="/task2" element={<Task2/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
