import React, {Component} from 'react';
import './index.scss'
import _map from 'lodash/map';
import {config} from '../../dataDeal/config';

class Index extends Component {

    clickItem = (path) => {
        this.props.history.push(path);
    };

    render() {
        return (
            <section id={'Index'}>
                <header>
                    快乐每一天
                </header>
                <div className={'container'}>
                    {
                        _map(config, (item, index)=>{
                            const {title, path} = item;
                            return(
                                <div className={'item'}
                                     key={index}
                                     onClick={()=>this.clickItem(path)}
                                >
                                    {title}
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Index;
