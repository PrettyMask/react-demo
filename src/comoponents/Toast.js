/**
 * Created by jinjindong on 19-2-17
 */
import React, {Component} from 'react';

class Toast extends Component{
    render() {
        const {message} = this.props;
        return (
            <div>
                {message}
            </div>
        );
    }
}
export default Toast;
