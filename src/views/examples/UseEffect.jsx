import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFactorial(n) {
    // const n = parseInt(n)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFactorial(n - 1) * n
}

function isEven(n) {
    return n % 2 === 0
}

const UseEffect = (props) => {
    const [number, setNumber] = React.useState(1)
    const [factorial, setFactorial] = React.useState(1)
    const [even, setEven] = React.useState(true)

    // useEffect é chamado toda vez que o number for alterado 
    React.useEffect(function () {
        setFactorial(calcFactorial(number))
    } , [number])

    React.useEffect(function () {
        setEven(isEven(number))
    } , [number])

    React.useEffect(function () {
        if (factorial > 1000000) {
            document.title = "Eita!!!"
        }
    } , [factorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red"> {factorial === -1 ? "Nao existe":factorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Status:</span>
                    <span className="text red"> {even ? "Par" : "Impar"}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
