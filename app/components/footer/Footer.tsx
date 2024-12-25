import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import{MdFacebook} from 'react-icons/md';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";


const Footer = () => {
  return (
    <footer
      className="
  bg-slate-200
  text sm
  mt-16
  "
    >
      <Container>
        <div
          className="
        flex
        flex-col
        md:flex-row
        justify-between
        pt-16
        pb-8
        "
        >
          <FooterList>
            <h3
              className="
            text-base
            font-bold
            mb-2
            "
            >
              Vehicles
            </h3>
            <Link href="#">Audi</Link>
            <Link href="#">Ferrari</Link>
            <Link href="#">Lamborghini</Link>
            <Link href="#">Mercedes-Benz</Link>
            <Link href="#">Porsche</Link>
            <Link href="#">Rolls-Royce</Link>
          </FooterList>
          <FooterList>
            <h3
              className="
            text-base
            font-bold
            mb-2
            "
            >
              Customer Service
            </h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3
              className="
            text-base
            font-bold
            mb-2
            "
            >
              About Us
            </h3>
            <p className="mb-2">
              Welcome to Hermus, where timeless elegance meets uncompromising
              performance. We specialize in offering the world’s most luxurious
              and high-performance vehicles, carefully curated for those who
              appreciate the finer things in life. From the iconic
              sophistication of Rolls-Royce to the exhilarating power of
              Ferrari, our collection embodies excellence, craftsmanship, and
              prestige. At Hermus, we believe that driving should be more than a
              necessity—it should be an experience of luxury and refinement.
              Discover a world where every detail is designed to inspire, and
              every journey is unforgettable.
            </p>
            <p>&copy; {new Date().getFullYear()} Hermus. All Rights Reserved</p>
          </div>
          <FooterList>
            <h3
              className="
            text-base
            font-bold
            mb-2
            "
            >
              Follow Us
            </h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
