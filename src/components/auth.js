import {auth, googleProvider} from '../config/firebase';
//import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import {signInWithPopup, signOut} from 'firebase/auth';
//import { Link } from 'react-router-dom';



export const Auth=(props)=> {
    /*const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password);
        }catch (err){
            console.log(err)
        }
    };
    console.log(auth?.currentUser?.email);*/

    const signInWithGoogle= async ()=>{
        try{
            await signInWithPopup(auth,googleProvider);
        }catch (err){
            console.log(err)
        }
    };

    const logOut= async ()=>{
        try{
            await signOut(auth);
        }catch (err){
            console.log(err)
        }
    };

    return (
    <div>
        {/*
        <input placeholder="Email" 
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input placeholder="Password"
        type='password'
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={signIn}> Sign IN </button>

        <button onClick={signInWithGoogle}>Sign in with google</button>

        {props.auths ? (
        <button onClick={logOut}>Logout</button>
        ): <></> }
        <button onClick={logOut}>Logout</button>*/}
    <div>
        <div class="row">
            <div class="col s12 m12">
            <div class="card green darken-1">
                <div class="card-content white-text">
                <div>
                {props.useremail ? (
                    <p>{props.useremail}</p>
                ) : (
                    <p>
                        No user signed in</p>
                )}
                </div>
                <span class="card-title"><h1>MY LEARNING PROGRAM </h1></span> 
                <center>
                    {props.auths ? (<>
                        {/*<Link to="/createprofile" class="waves-effect waves-light blue btn">Profile</Link><br /><br />*/}
                        <button class="waves-effect waves-light red btn" onClick={logOut}>Logout</button><br/>
                   
                    </>

                    ):<button class="waves-effect waves-light btn" onClick={signInWithGoogle}>Sign in with google</button>}
                </center>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    );
};