import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Personagem from './Personagem';
import JSONPersonagens from './characters_star_wars.json'
import Checkbox from './Checkbox';

function App() {

    //const [listaDePersonagens, setListaDePersonagens] = useState(JSONPersonagens)
    // const setUnicosCorOlhos = new Set(listaAlterada.map(personagem => personagem.eye_color))
    // const listaUnicosCorOlhos = Array.from(setUnicosCorOlhos)
   
    const [listaAlterada, setListaAlterada] = useState(JSONPersonagens)
    const [checkSorteio, setCheckSorteio] = useState(false)
    const [checkDesistir, setCheckDesistir] = useState(false)
    const [resultadoDoSorteio, setResultadoDoSorteio] = useState()

    function numeroMagico(min, max) { // max ta incluido
        //max é array.length-1 e min é 0
        return Math.floor(Math.random() * (max - min + 1) + min);  
    }

    function setarSorteadoStarWars() {
        if (checkSorteio) return
        const indice = numeroMagico(0, 24)
        const resultadoSorteio = listaAlterada[indice]
        setResultadoDoSorteio(resultadoSorteio)
        setCheckSorteio(true)
    }

    function desistir(){
        if (window.confirm(`Certeza que deseja desistir?`)) {
            alert(`Que vacilo jovem Padawan, o personagem sorteado era: ${resultadoDoSorteio.name}!`)
            setCheckDesistir(true)
        }else {
            alert('Isso não desista, que a força esteja com você!')
            setCheckDesistir(false)
        }
    }


    return (
        <section>
            {/* {console.log(listaUnicosCorOlhos)} */}
            <div className="instrucoes">
                <h1>Cara a cara - Adivinhe o personagem: Star Wars edition</h1>
                <h3>Há muito tempo, em uma galáxia muito, muito distante, um personagem aleatório foi selecionado. E agora, cabe a você descobrir quem foi.</h3>
                <h4>Instruções: selecione o filtro, dentre os disponíveis abaixo, e tente adivinhar o personagem escolhido.</h4>
                
                <form style={
                    {display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '15%'}
                    } action="" className="filtros">
                    {/* <button
                        //className={'button-8'}
                        onClick={setarSorteadoStarWars}>Sortear, Botão
                    </button> */}
                    
                    <div className="cadaCheck">
                        <input type="checkbox" checked={checkSorteio} onChange={setarSorteadoStarWars}/>
                        {console.log(resultadoDoSorteio)}
                        <label>Sortear</label>         
                    </div>

                    <div className="cadaCheck">
                        <input type="checkbox" checked={checkDesistir} onChange={desistir}/>
                        <label>Desistir</label>         
                    </div>

                    <br/><br/><br/>
                    
                    {/* <div className="cadaCheck">
                        <input type="checkbox" checked={checkJedi} onChange={ativadorChecked} name="jedi" id="jedi"/>
                        <label for="jedi">Jedi</label>
                        {console.log(todosJSONs.map(element => element.name))}
                    </div> */}
                    {/*COR DOS OLHOS*/}
                    <Checkbox
                        textoLabel={'Cor dos olhos: '}
                        caracteristicaIngles={'blue'}
                        caracComparacao={'eye_color'}
                        listaAlterada={listaAlterada}
                        setListaAlterada={setListaAlterada} 
                        resultadoSorteio={resultadoDoSorteio}>
                    </Checkbox>
                    <Checkbox
                        textoLabel={'Cor dos olhos: '}
                        caracteristicaIngles={'yellow'}
                        caracComparacao={'eye_color'}
                        listaAlterada={listaAlterada}
                        setListaAlterada={setListaAlterada} 
                        resultadoSorteio={resultadoDoSorteio}>
                    </Checkbox>
                    <Checkbox
                        textoLabel={'Cor dos olhos: '}
                        caracteristicaIngles={'red'}
                        caracComparacao={'eye_color'}
                        listaAlterada={listaAlterada}
                        setListaAlterada={setListaAlterada} 
                        resultadoSorteio={resultadoDoSorteio}>
                    </Checkbox>
                    
                    <Checkbox
                        textoLabel={'Cor dos olhos: '}
                        caracteristicaIngles={'brown'}
                        caracComparacao={'eye_color'}
                        listaAlterada={listaAlterada}
                        setListaAlterada={setListaAlterada} 
                        resultadoSorteio={resultadoDoSorteio}>
                    </Checkbox>
                    <br />
                    {/*COR DOS CABELOS*/}
                    <Checkbox
                        textoLabel={'Cor dos cabelos: '}
                        caracteristicaIngles={'brown'}
                        caracComparacao={'hair_color'}
                        listaAlterada={listaAlterada}
                        setListaAlterada={setListaAlterada} 
                        resultadoSorteio={resultadoDoSorteio}>
                    </Checkbox>
                    <Checkbox
                        textoLabel={'Cor dos cabelos: '}
                        caracteristicaIngles={'white'}
                        caracComparacao={'hair_color'}
                        listaAlterada={listaAlterada}
                        setListaAlterada={setListaAlterada} 
                        resultadoSorteio={resultadoDoSorteio}>
                    </Checkbox>
                    <Checkbox
                        textoLabel={'Cor dos cabelos: '}
                        caracteristicaIngles={'bald'}
                        caracComparacao={'hair_color'}
                        listaAlterada={listaAlterada}
                        setListaAlterada={setListaAlterada} 
                        resultadoSorteio={resultadoDoSorteio}>
                    </Checkbox>
                    
                    <br/>
                </form>
            </div>
        <div class="board">
        {/* style={{display: 'flex', flexWrap: 'wrap'}} */}
            <div class="fotos" >
                {/* {listaAlterada.map(element => {
                    return (
                        <div className="container">
                            <img src={element.image} width={"200px"} />
                            <div>
                                <button className={'button-8'}>{element.name}</button>
                            </div>
                        </div>
                    )
                })} */}
                    <Personagem
                        listaAlterada={listaAlterada}
                        resultadoSorteio={resultadoDoSorteio}>
                    </Personagem>
            </div>
            
        </div>
    </section>
    );
}

export default App;
