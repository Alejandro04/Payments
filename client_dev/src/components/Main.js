import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Content from './Content'

//Dentro de Switch van las rutas que corresponden con otros componentes
const Main = () => (
    <main>
        <Switch>
            <Content/>
        </Switch>
    </main>
)

export default Main