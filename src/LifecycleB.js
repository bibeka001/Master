import React, { Component } from "react";
class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: 'Bibeka' 
    };
    console.log('LifecycleB constructor');
  }
  static getDerivedStateFromProps(props, state){
      console.log('Lifecycleb getDerivedStateFromProps');
      return null
  }
  componentDidMount(){
      console.log('LifecycleB componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('Lifecycleb shouldComponentUpdate');
    return(true)
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleB getSnapshotBeforeUpdate ');
    return null;

  }
  componentDidUpdate(){
    console.log('LifecycelB componentDidUpdate');
  }


  render() {
      console.log('LifecycleB Render');
    return (
      <>
        <h1>Lifecycle B</h1>
      </>
    );
  }
}

export default LifecycleB;
