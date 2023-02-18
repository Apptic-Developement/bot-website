// imports
import MediumNavBar from "./MediumNavBar";
import MobileScreenNav from "./MobileNavBar";

// navbar
const NavBar = () => {
    return (
        <>
            {/* navbar for bigger or medium  screens  */}
            <MediumNavBar />

            {/* mobile navbar  */}
            <MobileScreenNav />
        </>
    );
};

// export
export default NavBar;
