// imports
import { Outlet } from "react-router-dom";
import NavBar from "../components/Headers/NavBar";
import AuthProvider from "./contexts/authContext";
import Footer from "../components/Footer/index";

// app
const App = () => {
    return (
        <>
            <AuthProvider>
                <NavBar />
                <Outlet />
                <Footer />
            </AuthProvider>
        </>
    );
};

// export
export default App;
