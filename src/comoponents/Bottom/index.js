import React, {Component} from 'react';
import './bottom.scss';

class Bottom extends Component {
    render() {
        const {onClick} = this.props;
        return (
            <footer>
                <div className={'go-back'} onClick={onClick}>返回</div>
            </footer>
        );
    }
}

export default Bottom;
