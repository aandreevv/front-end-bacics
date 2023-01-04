import {NavLink, Outlet} from "react-router-dom";
import "./Layout.css";

function Layout() {
    return (
        <>
            <header>
                <h2>Lab-7</h2>
                <div className="links">
                    <NavLink to="/task1">Завдання 1</NavLink>
                    <NavLink to="/task2">Завдання 2</NavLink>
                </div>
            </header>

            <main>
                <Outlet/>
            </main>

        </>
    )
}

export default Layout;
