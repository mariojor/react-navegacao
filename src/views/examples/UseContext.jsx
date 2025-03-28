import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'

const UseContext = props => {

    const context = useContext(DataContext);

    function setNumber(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">
                <span className="text">{context.state.subtitle}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(context.state.number - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(context.state.number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
