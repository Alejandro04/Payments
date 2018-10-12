import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Content from './Content'
import AddFormPaymentTest from './AddFormPaymentTest'

//Dentro de Switch van las rutas que corresponden con otros componentes
const Main = () => (
    <main>
        <Switch>
            <Route exact path = '/' component={Content} />
            <Route exact path = '/test' component={AddFormPaymentTest} />
        </Switch>
    </main>
)

export default Main