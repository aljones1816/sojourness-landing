import Link from "next/link";
import Image from "next/image";
import { CloudIcon, CubeIcon } from "@heroicons/react/outline";

export default function Footer() {
  return (
    <footer className="bg-sjLightRed text-sjCream py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Important Links */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-serif">Important Links</h2>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms and Conditions
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </div>

        {/* Middle Column: Logo */}
        <div className="flex justify-center items-center">
          <Image
            src="/sojourness-icon-fullcolor-RGB.png"
            alt="Sojourness Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Right Column: Social Media Icons + Contact Info */}
        <div className="flex flex-col items-end space-y-4">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/sojourness_travels"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <CloudIcon width={30} height={30} className="text-sjBlueBlack" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <CubeIcon width={30} height={30} className="text-sjBlueBlack" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@sojourness.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
