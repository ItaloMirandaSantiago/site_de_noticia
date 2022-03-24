import React, { useEffect, useState } from "react";

export default function Favoritos(){
    const [favoritos, set_favoritos] = useState([])
    
    useEffect(()=>{
        if (favoritos.length === 0) {
            console.log('foi')
        }
    }, [])



return (<div>
    <h2>não terminado</h2>
</div>)

}