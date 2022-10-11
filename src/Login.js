import React,{useState} from 'react'
// import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useHistory, NavLink } from 'react-router-dom'
import './Login.css';
import { auth } from "./firebase";

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const db = firebaseApp.firestore();
// const auth = getAuth(app);
function Login() {
    const navigate = NavLink();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [auth, setAuth] = useState('');

    const signIn =async (e) => {
        e.preventDefault();
        try{
          const user = await signInWithEmailAndPassword(auth, email, password);
          console.log(user);  
          if(auth) {
            navigate('/')};
          }catch(error){
            alert(error.message);
          }
             
    }
  
    // const register = e => {
    //   e.preventDefault(); } 
    const register = async (e) => {
        e.preventDefault();  
        try{
          const user = await createUserWithEmailAndPassword(auth, email, password);
          console.log(user);  
          if(auth) {
            history.push('/')};
          }catch(error){
          alert(error.message);
        }
      }
    
        

        // auth
        //   .createUserWithEmailAndPassword(auth, email, password)
        //   .then((auth)=> {
        //         console.log(auth);        
        //   })
        //   .catch(error => alert(error.message))
                  // c(auth,email, password)
                  // .then((auth)=> {
                  //     console.log(auth);
                  // })
                  // .catch(error => alert(error.message))
            
   
  

  return (
    <div className="login">
        <Link to='/'>
      <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
        </Link>
        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login__signInButton'> Sign In</button>
            </form>
            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
                Sale. Please see our Privacy Notice, our Cookies Notice and our
                Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

        </div>
    </div>
  )
}

export default Login
