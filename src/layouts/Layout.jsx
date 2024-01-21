import { Outlet } from 'react-router-dom'
import { Navbar } from 'flowbite-react';
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';
export default function Layout() {
    return (

        <div>
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="../img/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tienda Café</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/" active>
                        Inicio
                    </Navbar.Link>
                    <Navbar.Link href="/auth">
                        Ingresar
                    </Navbar.Link>
                    <Navbar.Link href="/auth/registro">Registrarme</Navbar.Link>

                </Navbar.Collapse>
            </Navbar>

            <div className='md:flex'>
                <Sidebar />
                <div className='flex-1'>
                 <Outlet />
                </div>
                <Resumen />
            </div>
        </div>
    )
}
