import react,{Component} from 'react'
import './App.css';
import { Button,Alert } from 'antd'
import logo from './logo.svg';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Button>12122121fff1</Button>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}
class App1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      list : [1,'dd',44,'ff']
    }
  }
  
  render(){
    return(
      <div>
        {
          this.state.list.map((item)=>{
            return(
              <p>{item}</p>
            )
          })
        }
      </div>
    )
  }
}

export default App1;
