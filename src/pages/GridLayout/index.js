import React, {Component} from 'react';
import './gridLayout.scss';

class GridLayout extends Component{
    render() {
        return (
            <div className={'GridLayout'}>
                <div className={'item'}>A</div>
                <div className={'item'}>B</div>
                <div className={'item'}>C</div>
                <div className={'item'}>D</div>
            </div>
        );
    }
}

export default GridLayout;
