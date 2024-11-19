import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex-Between max-container padding-container relative z-30 py-5 ml-5">
      <Link href='/'>
      <Image src="/logo.svg" alt="logo" width={150} height={50}/>
      </Link>
    </nav>
  )
}

export default Navbar
