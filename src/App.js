

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleSaveContentCheck(){

  }

  render(){

    console.log("test")

    return(
      <div>  
        <h1>test</h1>
        <textfield></textfield>
        <button onClick={this.handleSaveContentCheck}>Click Me</button>
      </div>
      
    );
  }
}