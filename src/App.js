
import './App.css';
import {useState} from 'react';

function App() {
  const [name,setName] = useState('');
  const [mobile,setMobile] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  return(
    <div className='main'>
      <form>
        <input placeholder='Name' value={name}
        onChange={(e) => setName(e.target.value)}/>
        <input placeholder='Mobile' value={mobile}
        onChange={(e) => setMobile(e.target.value)}/>
        <input placeholder='Email' value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder='Password' value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'> Submit</button>
      </form>
    </div>

  )
}
  

export default App;
