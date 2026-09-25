import { auth } from "@/app/_lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="hidden items-center gap-8 sm:flex">
      <ul className="pl-10 flex gap-10 items-center">
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <Image
                className="h-8 rounded-full"
                src={session.user.image}
                width={40}
                height={30}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
