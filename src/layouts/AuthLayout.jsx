import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from 'flowbite-react';
export default function AuthLayout() {
  return (
    <main>
   <Navbar fluid rounded>
      <Navbar.Brand  href="https://flowbite-react.com">
        <img src="../img/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Inicio
        </Navbar.Link>
        <Navbar.Link  href="/auth">
          Ingresar
        </Navbar.Link>
        <Navbar.Link href="/auth/registro">Registrarme</Navbar.Link>
 
      </Navbar.Collapse>
    </Navbar>
      <div className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center md">
        <img src="../img/logo.svg" alt="imagen logotipo" className="max-w-xs" />
        <div className='p-10 w-full'>
          <Outlet />
        </div>
      </div>
    </main>

  )
}

