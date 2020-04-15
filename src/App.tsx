import * as React from 'react';

export interface IAppProps {
}

interface IState {
  Labeltext:string;
  changeColor: any;

}


export default class App extends React.Component<IAppProps,IState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {changeColor:"",Labeltext:""}
      

    }
    componentDidMount() {
      this.setState({ changeColor:"green"})
      this.setState({Labeltext:"I am using componentDidMount to Change my color"})
  
    }
  

    public changColor = () => {
      this.setState({ changeColor:"blue" })
    }

  public render() {
    return (

      <div style={{backgroundColor: this.state.changeColor}}
      >
        <h1>{this.state.Labeltext}</h1>
             {/* <button   onClick={this.componentDidMount} >Click</button> */}
             <button  onClick={this.changColor} > Change Color </button>


      </div>
    );
  }
}
