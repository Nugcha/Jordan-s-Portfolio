import Link from 'next/link';

export default function Navbar(){
    return(
        <header>
      <nav className="nav">
        <Link href="/">
          About Me
        </Link>
        <div>
          <Link href="/projects">
            Projects
          </Link>
          <Link href="/contact_me">
            Contacts
          </Link>+
        </div>
      </nav>
    </header>
    )
}