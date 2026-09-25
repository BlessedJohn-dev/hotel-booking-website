import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="60"
        width="60"
        quality={100}
        alt="The Wild Oasis logo"
      />
      <span className="text-lg sm:text-xl font-semibold text-primary-100 pr-10">
        The Wild Oasis
      </span>
    </Link>
  );
}
/*
<Link href="/" className="flex items-center gap-3 z-10">
      <Image
        src={logo}
        height="60"
        width="60"
        quality={100}
        alt="The Wild Oasis logo"
      />
      <span className="sm:text-lg lg:text-xl font-semibold text-primary-100">
*/

export default Logo;
