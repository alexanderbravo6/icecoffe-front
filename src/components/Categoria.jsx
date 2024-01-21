import useQuiosco from "../hooks/useQuiosco"



export default function Categoria({ categoria }) {
    const { handleClickCategoria,categoriaActual } = useQuiosco();
    const { icono, id, nombre } = categoria
    const resaltarCategoriaActual = () => categoriaActual.id === id ? "bg-amber-400" : "bg-white"
    return (
        <div className={`${resaltarCategoriaActual()} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>

            <img src={'/img/icono_' + icono + '.svg'} className="w-12" alt="Imagen Icono" />
            <button
            type="button"
            onClick={() => handleClickCategoria(id)}
            className="text-lg cursor-pointer truncate font-bold"> {nombre} </button>
        </div>
    )
}
