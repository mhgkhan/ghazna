import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="w-full dark:bg-gray-700 bg-pink-600">
      <div className="container mx-auto ">
        <div className="footer-area flex items-start md:justify-between justify-center gap-4 flex-wrap p-4">
        <p className="text-center">Copyright&copy; 2025 <Link href={"/"}>GHAZNA</Link> </p>
        <div className="footer-part flex items-center justify-center flex-col gap-2">
            <div className="pages flex gap-4">
                <Link href={'/privacy-policy'} className="text-sm text-gray-200 hover:underline">Privacy policy</Link>
                <Link href={'/cookies'} className="text-sm text-gray-200 hover:underline">Terms & Conditions  </Link>
            </div>
        </div>
        <div className="socialmedias flex gap-2">
                <Link href={"/"} className="flex items-center gap-3 text-2xl text-white"><FaGithub /></Link>
                <Link href={"/"} className="flex items-center gap-3 text-2xl text-white"><FaFacebook /></Link>
                <Link href={"/"} className="flex items-center gap-3 text-2xl text-white"><FaInstagram /></Link>
                <Link href={"/"} className="flex items-center gap-3 text-2xl text-white"><FaLinkedin /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
