
import { createContext, useState , useEffect  } from 'react'
import { categorias as categoriasDB } from "../data/categorias"
import { toast } from 'react-toastify';
const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);


    //cada que el pedido cambie queremos que esta función se ejecute



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
    const handleAgregarPedido = ({ categoria_id, ...producto }) => {

        if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
            //map permite iterar sobre todos los elementos
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)

            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente')

        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }
    }
    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        !setModal(!modal);
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.error('Producto Eliminado')
    }
    useEffect (() =>{
        const nuevoTotal =  pedido.reduce((total,producto) => (producto.precio * producto.cantidad ) + total , 0 )
        setTotal(nuevoTotal)
    },[pedido])

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                pedido,
                handleClickModal,
                handleEliminarProductoPedido,
                producto,
                handleSetProducto,
                handleAgregarPedido,
                handleEditarCantidad,
                total
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