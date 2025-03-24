import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="w-full dark:bg-gray-700 bg-pink-600">
      <div className="container mx-auto ">
        <div className="footer-area flex items-start md:justify-between justify-center gap-4 flex-wrap p-4">
          <p className="text-center text-white">Copyright&copy; 2025 <Link href={"/"}>GHAZNA</Link> </p>
          <div className="footer-part flex items-center justify-center flex-col gap-2">
            <div className="pages flex gap-4">
              <Link href={'/privacy-policy'} className="text-sm text-white hover:underline">Privacy policy</Link>
              <Link href={'/termsandconditions'} className="text-sm text-white hover:underline">Terms & Conditions  </Link>
            </div>
          </div>
          <div className="socialmedias flex gap-2">
            <Link
              href={"https://github.com/mhgkhan"}
              className="flex items-center gap-3 text-2xl text-white"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub />
            </Link>
            <Link
              href={"https://facebook.com/mhghazna"}
              className="flex items-center gap-3 text-2xl text-white"
              aria-label="Visit my Facebook profile"
            >
              <FaFacebook />
            </Link>
            <Link
              href={"https://instagram.com/mhghazna"}
              className="flex items-center gap-3 text-2xl text-white"
              aria-label="Visit my Instagram profile"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"https://linkedin.com/in/ghaznap"}
              className="flex items-center gap-3 text-2xl text-white"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin />
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
