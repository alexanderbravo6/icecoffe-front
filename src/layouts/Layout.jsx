import { Outlet } from 'react-router-dom'
import { Navbar } from 'flowbite-react';
import Sidebar from '../components/Sidebar';
import Resumen from '../components/Resumen';
import useQuiosco from '../hooks/useQuiosco';
import Modal from 'react-modal';
import ModalProducto from '../components/ModalProducto';

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement('#root')

export default function Layout() {

    const { modal,handleClickModal } = useQuiosco();




    return (
        <>
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
                    <div className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
                        <Outlet />
                    </div>
                    <Resumen />
                </div>
            </div>
                <Modal isOpen={modal} style={customStyles}>
                   <ModalProducto />
                </Modal>

        </>
    )
}
