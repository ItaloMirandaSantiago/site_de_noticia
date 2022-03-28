import React, { useEffect, useState } from "react";
import img_estrela_acesa from '../imgs/estrela.png'

export default function Favoritos(props){

return (

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-1">
        {props.items.map((item, index)=> {
            
            return(
                <div key={index}>    
                    <div className='card mb-4 shadow-sm'>
                        <div className='card-body tamanho-do-card'>
                            <button><img src={img_estrela_acesa} width='30px' height='30px' className="img_container"/></button>
                            {/* props.salvar_favoritos */}
                            <h2 className='card-text border-bottom border-dark titulo_materia'>{item.titulo}</h2>
                            <p className='card-text texto'>{item.introducao}</p>
                        </div>
                    </div>
                </div>
            )
        }
        )}
    </div>

)}