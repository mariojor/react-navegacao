import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import React from 'react'

const UseState = (props) => {

    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('')

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!" />
            <SectionTitle title="Exemplo 1" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button onClick={() => setCount(count + 1)} className="btn">+1</button>
                    <button onClick={() => setCount(count - 1)} className="btn">-1</button>
                    <button onClick={() => setCount(current => current +100)} className="btn">+100</button>
                </div>
            </div>
            <SectionTitle title="Exemplo 2" />
            <input value={name} onChange={e => setName(e.target.value)} type="text" className="input" />
        </div>
    )
}

export default UseState
