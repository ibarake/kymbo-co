"use client";

import Logo from "./logo";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function NavBar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="flex row justify-between bg-cyan-800">
      <div className="">
        <Link href="/">
          <Logo height={100} classes="object-contain" />
        </Link>
      </div>
      <div>
        <Link href="/form">Pages</Link>
      </div>
      <div>
        {session?.user ? (
          <div>
            <div>
              <span>
                <p>{session.user.name}</p>
                <p>{session.user.email}</p>
              </span>
              <span>
                <img src={session.user.image} alt="Profile picture" />
              </span>
            </div>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              signIn();
            }}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
