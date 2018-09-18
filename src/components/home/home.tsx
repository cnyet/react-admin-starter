import * as React from "react";
export interface InterfaceHello { compiler: string; framework: string }
export default class Hello extends React.Component<InterfaceHello, {}> {
  public render(){
    return <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>;
  }
}