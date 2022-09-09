//import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Test from './component/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
         {/*<Greet name="abc" prop2="ssss"><p>
          Child Prop</p></Greet>
         <Greet name="efg" prop2="aaaaa">
          <button>Action</button>
         </Greet>
         <Greet name="xyz" prop2="dddd"/>
         <Welcome name="abc" prop2="ssss"></Welcome>
         <Welcome name="efg" prop2="aaaaa"></Welcome>
         <Welcome name="xyz" prop2="dddd"></Welcome>
  <Hello/>*/} 
         {/* <Message></Message> */
         <Test />}
        </p>
        
      </header>
    </div>
  );
}

export default App;
