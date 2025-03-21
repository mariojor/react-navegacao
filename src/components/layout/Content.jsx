import './Content.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import UseState from '../../views/examples/UseState'
import UseEffect from '../../views/examples/UseEffect'
import UseRef from '../../views/examples/UseRef'
import UseCallback from '../../views/examples/UseCallback'
import UseMemo from '../../views/examples/UseMemo'
import UseContext from '../../views/examples/UseContext'
import UseReducer from '../../views/examples/UseReducer'
import UseCustom from '../../views/examples/UseCustom'
import About from '../../views/examples/About'
import Param from '../../views/examples/Param'


const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/param/:id" element={<Param />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/useRef" element={<UseRef />} />
            <Route path="/useCallback" element={<UseCallback />} />
            <Route path="/useMemo" element={<UseMemo />} />
            <Route path="/useContext" element={<UseContext />} />
            <Route path="/useReducer" element={<UseReducer />} />
            <Route path="/useCustom" element={<UseCustom />} />
        </Routes>
    </main>
)

export default Content