import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import ClienteCrud from '../components/clientes/ClienteCrud'
import Usinas from '../components/usinas/Usinas'
import Rentabilidade from '../components/rentabilidade/Rentabilidade'

export default props => 

    <Switch>

        <Route exact path='/' component={Home} />

        <Route path='/clientes' component={ClienteCrud} />

        <Route path='/usinas' component={Usinas} />

        <Route path='/rentabilidade' component={Rentabilidade} />
        
        <Redirect from='*' to='/' />
        
    </Switch>