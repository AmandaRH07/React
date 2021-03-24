import React from 'react'

export default props => {
    function acao() {
        let list = []
        for (let i = 0; i <= 6; i++){
            list.push(Math.floor(Math.random() * 100) + 1);
            list.push(" ")
            console.log(list)
        }
        
        props.onClicar(list)
    }

    return (
        <div>
            <button onClick={acao}>Gerar</button>
        </div>
    )
}
     