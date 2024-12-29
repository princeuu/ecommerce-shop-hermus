import Link from "next/link";
import Container from "../Container";
import CartCount from "./CartCount";

const NavBar = () => {
  return (
    <div
      className="
    sticky
    top-0
    w-full
    bg-slate-200
    z-30
    shadow-sm
   
    "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
                flex
                items-center
                justify-between
                gap-3
                md:gap-0
                h-full
                "
          >
            <Link href="/">
              <img src="/logo.png" alt="hermus logo" className="h-12 w-auto" />
            </Link>
            <div>Search</div>
            <div
              className="
                    flex items-center gap-8 md:gap-12
                    "
            >
              <CartCount/>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
