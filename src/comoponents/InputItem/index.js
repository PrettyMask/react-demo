import React from 'react';
import PropTypes from 'prop-types';

import './inputItem.scss';

const {string, func} = PropTypes;

class InputItem extends React.Component {
    static propTypes = {
        /**
         * 输入类型
         */
        type: string,
        /**
         * 输入改变函数
         */
        onChange: func,
        /**
         * 失焦函数
         */
        onBlur: func,
        /**
         * placeHolder
         */
        placeholder: string,
        /**
         * 清除文案
         */
        clearText: string
    };

    static defaultProps = {
        type: 'text',
        placeholder: '请输入...',
        clearText: 'x'
    };

    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            showClear: false
        };
    }

    changeInput(e) {
        const {onChange} = this.props;
        let value = e.target.value;
        if (onChange) {
            onChange();
        } else {
            this.setState({
                comment: value,
            });
        }
    }
    onFocus = () => {
        this.setState({
            showClear: true,
        });
    };

    clear = () => {
        this.setState({comment: ''})
    };


    render() {
        const {showClear, comment} = this.state;
        const {type, onBlur, placeholder, clearText} = this.props;
        return(
            <div className={'InputItem'}>
                <div className={'input-wrap'}>
                    <input
                        type={type}
                        value={comment}
                        placeholder={placeholder}
                        onChange={(e)=>this.changeInput(e)}
                        onFocus={this.onFocus}
                        onBlur={()=>{onBlur && onBlur()}}
                    />
                    {
                        showClear &&
                        <span className={'input-clear'} onClick={this.clear}>{clearText}</span>
                    }
                </div>
            </div>
        );
    }
}

export default InputItem;
