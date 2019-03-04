import React from 'react';
import Bottom from '../../comoponents/Bottom/index';
import InputItem from '../../comoponents/InputItem/index';
import './input.scss';

class Input extends React.Component {
    render() {
        return(
            <div id={'Input'}>
                <InputItem />
                <Bottom onClick={()=>{this.props.history.goBack()}}/>
            </div>
        );
    }
}

export default Input;
