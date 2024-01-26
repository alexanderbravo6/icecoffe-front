
import { createContext, useState } from 'react'
import { categorias as categoriasDB } from "../data/categorias"
import { toast } from 'react-toastify';
const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);

    //señalizar una función
    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }
    const handleClickModal = () => {
        setModal(!modal)
    }
    const handleSetProducto = producto => {
        setProducto(producto)
    }
    //Eliminar elementos de un objeto
    const handleAgregarPedido = ({ categoria_id, imagen, ...producto }) => {

        if(pedido.some( pedidoState => pedidoState.id === producto.id)){
            //map permite iterar sobre todos los elementos
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)

            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente')
          
        }else{
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }
    }
    const handleEditarPedido =({ 
        
    })

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                pedido,
                handleClickModal,
                producto,
                handleSetProducto,
                handleAgregarPedido
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )

}

export {
    QuioscoProvider
}
export default QuioscoContext