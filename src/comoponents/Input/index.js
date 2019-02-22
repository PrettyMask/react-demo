import React from 'react';
import Bottom from '../../comoponents/Bottom/index';

import './input.scss';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '在这里赋的值是初始值, 可以有也可以没有',
            showClear: false
        };
    }
    changeInput(e) {
        let value = e.target.value;
        this.setState({
            comment: value,
        });
    }

    onFocus = () => {
        const {comment} = this.state;
        if (!!comment) {
            this.setState({
                showClear: true,
            });
        }
    };

    clear = () => {
        this.setState({comment: ''})
    };


    render() {
        const {comment, showClear} = this.state;
        return(
            <div id={'Input'}>
                <div className={'input-wrap'}>
                    <input
                        type="text"   // 注意!! 一定要写类型, 否则点击的时候会报错
                        value={comment}
                        onChange={(e)=>this.changeInput(e)}
                        onFocus={this.onFocus}
                    />
                    {
                        showClear &&
                        <span className={'input-clear'} onClick={this.clear}>清除</span>
                    }
                </div>
                <Bottom onClick={()=>{this.props.history.goBack()}}/>
            </div>
        );
    }
}

export default Input;
