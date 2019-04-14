import React, {Component} from 'react';
import './test.scss'

class Test extends Component {
    test = () => {
        let numArr = [1,1,2,3,4,5];
        let singleNumber = function(nums) {
            for (let i = 0; i < nums.length; i ++) {
                if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
                    return nums[i];
                }
            }
        };
        console.log(singleNumber(numArr));
    };
    testBetter = () => {
        let numArr = [0,0,1,1,2,2,3];
        let singleNumber = (nums) => {

        };
        console.log(singleNumber(numArr))
    };
    render() {
        return (
            <div className={'test-start'} onClick={this.testBetter}>
                start
            </div>
        );
    }
}

export default Test;
