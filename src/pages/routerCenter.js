import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

import Index from './Index/index';
import LayoutThree from './LayoutThree';
import GridLayout from './GridLayout';

class RouterCenter extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Index} />
                <Route path='/index' exact component={Index} />
                <Route path='/layoutThree' exact component={LayoutThree} />
                <Route path='/gridLayout' exact component={GridLayout} />
            </Switch>
        );
    }
}

export default RouterCenter;
