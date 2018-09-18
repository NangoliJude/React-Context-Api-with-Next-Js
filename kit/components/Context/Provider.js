import React, { Component } from "react";
import { MainContext } from "./MainContext";

class Provider extends Component {
  state = {
    ContextNext: "Hi I'm React Context Now working with Next Js",
    styledcomponent: "I'm also working with my Lovely Sister Styled Components",
    name: "Nangoli Jude Eric"
  };

  render() {
    return (
      <MainContext.Provider
        value={{
          state: this.state,
          actions: {}
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export { Provider };
