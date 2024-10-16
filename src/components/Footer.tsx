import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

import Logo from '@/images/logos/Hakuna_Logo.png'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Image 
          src={Logo}
          width={150}
          height={150}
          alt="Logo"
          className="mx-auto"/>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Link 1</NavLink>
              <NavLink href="#testimonials">Link 2</NavLink>
              <NavLink href="#pricing">Link 3</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Hakuna Matata. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
