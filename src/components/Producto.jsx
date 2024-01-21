import React from 'react'

export default function Producto({producto}) {
    const {nombre,precio,imagen,categoria_id} = producto
  return (
    <div className='border p-3 shadow bg-white'>
        <img src={"/img/"+imagen+".jpg"} alt={"image"+nombre+""}  className='w-full'
        
        />

    </div>
  )
}
