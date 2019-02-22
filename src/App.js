import React, { Component } from 'react';
import './App.css';
import './styel.scss';
class App extends Component {
    componentDidMount() {
      this.state = {
          show: false
      };
      this.hideEvent = null;
  }

  clickMe = () => {
      this.setState({
          show: true
      })
  };

  hideMe = () => {
      const that = this;
      const hide = document.querySelector('.App .wrap');
      hide.classList.add('wrap-move-out');
      this.hideEvent = setTimeout(()=>{
          this.setState({show: false});
          clearTimeout(that.hideEvent);
      }, 300); // 延时时间和css中的保持一致
  };

  render() {
      return (
          <div className="App">
              hello
              <div className={'wrap'}
                   onClick={this.hideMe}
              >
                  hellooooo
              </div>
          </div>
      );
  }
}

export default App;
