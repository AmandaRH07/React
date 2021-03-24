import React, {useState} from 'react'
import Gerador from './Gerador'

export default props => {

    const[num, setNum] = useState(0)
    
    function quandoClicado(valorGerado){
        setNum(valorGerado)
    }

    return (
        <div>
            <h4>Valor: {num}</h4>
            <Gerador onClicar={quandoClicado}></Gerador>
        
        </div>
    )
}
