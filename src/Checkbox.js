import React, { useState } from 'react'

export default function Checkbox({
        textoLabel,
        caracteristicaIngles,
        caracComparacao,
        listaAlterada,
        setListaAlterada,
        resultadoSorteio
    }) {

    const [check, setCheck] = useState(false)

    function comparadorAcerto() {
        
        if (check) {return}
        else {
            if (resultadoSorteio[caracComparacao] == caracteristicaIngles) {
                const listaNova = listaAlterada.filter(element => element[caracComparacao] == caracteristicaIngles)
                setListaAlterada([...listaNova])
            } else {
                const listaNova = listaAlterada.filter(element => element[caracComparacao] != caracteristicaIngles)
                setListaAlterada([...listaNova])
            }
            setCheck(true)
        }
    }

    return (
        <div className="cadaCheck">
            <input type="checkbox" checked={check} onChange={comparadorAcerto}/>
            <label>{textoLabel}{caracteristicaIngles}</label>         
        </div>
    )
}
