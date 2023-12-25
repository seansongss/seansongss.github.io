import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutme">About Me</Link>
                    </li>
                    <li>
                        <Link to="/hobbies">Hobbies</Link>
                    </li>
                </ul>
            </nav>
            { }
            <Outlet />
        </>
    )
};

export default Layout;