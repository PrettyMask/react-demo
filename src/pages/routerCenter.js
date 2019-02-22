import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

import Index from './Index/index';
import Input from  '../comoponents/Input/index';

class RouterCenter extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Index}/>
                <Route path='/index' exact component={Index}/>
                <Route path='/input' exact component={Input}/>
            </Switch>
        );
    }
}

export default RouterCenter;
