import React from 'react'

export default function Personagem({listaAlterada, resultadoSorteio}) {  
    
    function conferirChute(nomePersonagem){
        if (window.confirm(`Certeza que deseja chutar ${nomePersonagem}?`)) {
            if (nomePersonagem == resultadoSorteio.name){
                alert('Parabéns você venceu!')
            } else {
                alert(`Infelizmente não foi dessa vez, o personagem sorteado era: ${resultadoSorteio.name}`)
            }
        }
    }  

    return (
        <>
        {/* {console.log(listaAlterada)} */}
        {listaAlterada.map(element => {
            return (
                <div class="container">
                    <img src={element.image} width={"200px"}/>
                    <div>
                        <button className={'button-8'} onClick={e => conferirChute(e.target.value)} value={element.name}>{element.name}</button>
                    </div>
                </div>
            )
        })}  
    </>
)}
