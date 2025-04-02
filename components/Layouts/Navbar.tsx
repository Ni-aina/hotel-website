import DesktopScreen from "../DesktopScreen";
import MobileScreen from "../MobileScreen";

const Navbar = () => {
    return ( 
        <div className="bg-white text-dark p-3 ">
            <nav className="hidden lg:block">
                <DesktopScreen />
            </nav>
            <nav className="block lg:hidden">
                <MobileScreen />
            </nav>
        </div>
     );
}
 
export default Navbar;