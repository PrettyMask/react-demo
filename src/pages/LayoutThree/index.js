/** 三栏布局 */

import React, {Component} from 'react';
import './layoutThree.scss';
import Bottom from "../../comoponents/Bottom";

class LayoutThree extends Component{
    render() {
        return (
            <section className={'LayoutThree'}>
                绝对定位
                <div className={'absolute-layout'}>
                    <div className={'left'}>左</div>
                    <div className={'center'}>中</div>
                    <div className={'right'}>右</div>
                </div>
                float 布局
                <div className={'float-layout'}>
                    <div className={'left'}>左</div>
                    <div className={'right'}>右</div>
                    <div className={'center'}>中</div>
                </div>
                flex 布局
                <div className={'flex-layout'}>
                    <div className={'left'}>左</div>
                    <div className={'center'}>中</div>
                    <div className={'right'}>右</div>
                </div>
                table 布局
                <div className={'table-layout'}>
                    <div className={'left'}>左</div>
                    <div className={'center'}>中</div>
                    <div className={'right'}>右</div>
                </div>
                grid 布局
                <div className={'grid-layout'}>
                    <div className={'left'}>左</div>
                    <div className={'center'}>中</div>
                    <div className={'right'}>右</div>
                </div>
                <Bottom onClick={() => {this.props.history.goBack()}} />
            </section>
        )
    }
}

export default LayoutThree;
