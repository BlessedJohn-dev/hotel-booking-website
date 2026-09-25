import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import HamburgerButton from "./HamburgerButton";
import MobileUserNav from "./MobileUserNav";

function Header() {
  return (
    <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
      <Logo />

      <HamburgerButton>
        <MobileUserNav />
      </HamburgerButton>

      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
