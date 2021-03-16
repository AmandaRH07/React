import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/cards'

export default (props) => (
    // jsx
    <div>
        <Card titulo="Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>

        {/* <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos> */}
        {/* <Primeiro></Primeiro>
        <ComParametro 
        titulo="Esse é o título"
        subtitulo="Esse é o subtitulo"/>
        <ComParametro 
        titulo="opa"
        subtitulo="epa"/> */}
    </div>
)