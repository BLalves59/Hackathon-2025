import Link from "next/link";

export function Header(){
  return(
    <header className="flex px-2 py-5 bg-zinc-900 text-white">
      <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
        <div>
          Horse Aura
        </div>

        <nav>

          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link href={"/"}>
                Home
              </Link>
            </li>

            <li>
              <Link href={"/contato"}>
                Contato
              </Link>
            </li>

            <li>
              <Link href={"/login"}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}