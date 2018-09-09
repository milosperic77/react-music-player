import React, { Component, createContext } from "react";
const { Provider, Consumer } = createContext();

class ConfigProvider extends Component {
  state = {
    currentDisplay: 'playlist',
    toogleDisplay: () => {
      if(this.state.currentDisplay === 'playlist'){
        this.setState({
          currentDisplay: 'single'
        });
      } else if(this.state.currentDisplay === 'single'){
        this.setState({
          currentDisplay: 'playlist'
        });
      }
    },
  };
  render() {
    return (
      <Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ConfigProvider };
export default Consumer;
