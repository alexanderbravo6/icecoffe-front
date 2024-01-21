
export default function Categoria({ categoria }) {
    const { icono, id, nombre } = categoria
    return (
        <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">

            <img src={'/img/icono_' + icono + '.svg'} className="w-12" alt="Imagen Icono" />
            <p className="text-lg cursor-pointer truncate font-bold"> {nombre} </p>
        </div>
    )
}
