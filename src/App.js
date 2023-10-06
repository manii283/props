import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
        <Profile text='manisha' lname={{name: 'nayak'}}/>
        {/* <Profile lname={{name: 'nayak'}}/> */}
    </div>
  );
}

export default App;
