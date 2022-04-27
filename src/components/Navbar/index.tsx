import { Container } from './styles'
import Image from 'next/image'

export default function Navbar() {
  return (
    <Container>
      <nav className="container">
        <ul className="navigation">
          <li className="logo">
            <Image src="/images/logo-pokedex.png" width="230px" height="50px" alt="logo-pokedex" />
          </li>
        </ul>
        <ul className="settings">
          <li className="logo-Settings">
            <Image
              src="/icons/settings.svg"
              width="230px"
              height="50px"
              alt="logo-settings"
            />
          </li>
        </ul>
      </nav>
    </Container>
  )
}
