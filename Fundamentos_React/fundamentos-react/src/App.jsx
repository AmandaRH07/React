import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIF from './components/basicos/CondicionalComIF'
import Pai from './components/comunicação/direta/Pai'
import Super from './components/comunicação/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Resultado from './components/megasena/Resultado'
// import Gerador from './components/megasena/Gerador'

export default (props) => (
    // jsx
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#11 - Mega-Sena" color="#FFA500">
               <Resultado></Resultado>
            </Card>
            <Card titulo="#10 - Contador" color="#36688D">
                <Contador passo={1} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#F18904">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação indireta" color="#F05837">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação direta" color="#16235A">
                <Pai sobrenome="Souza" />
            </Card>
            <Card titulo="#06 - Condicionais versão 2" color="#720017">
                <CondicionalComIF numero={10}>

                </CondicionalComIF>
            </Card>
            <Card titulo="#05 - Condicionais versão 1" color="#03353E">
                <Condicional numero={11}>

                </Condicional>
            </Card>
            <Card titulo="#04 - Repeticao" color="#0294A5">
                <Repeticao>

                </Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#A79C93">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente Com Parametro" color='#C1403D'>
                <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
            </Card>
            <Card titulo="#01 - Primeiro" color='#0486D8'>
                <Primeiro />
            </Card>
        </div>
    </div>
)