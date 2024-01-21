import { categorias } from "../data/categorias"
import Categoria from "./Categoria"

export default function Sidebar() {
    return (
        <>
            <aside className='md:w-52'>
                <div className="p-4">
                    <img className="w-40" src="../img/logo.svg" alt="Image Logo" />
                </div>
                <div className="mt-10">
                    {categorias.map(categoria => (
                        <Categoria
                            key={categoria.id}
                            categoria={categoria}
                        />
                    ))}
                </div>
                <div className="my-5 px-5">
                        <button type="button" className="bg-red-500 w-full  text-center p-3 text-white font-bold truncate">
                            Cancelar Orden
                        </button>
                </div>
            </aside>
        </>

    )
}
