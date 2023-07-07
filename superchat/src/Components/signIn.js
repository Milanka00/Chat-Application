import React from 'react';

const SignIn = () => {

    const signInWithGoogle=()=>{
        const provider=new firebase.auth.GoogleAuthProvider();
        auth.SignInWithPopup(provider);
    }
    return ( 
        <React.Fragment>

            <button onClick={signInWithGoogle}>Sign in with Google</button>

        </React.Fragment>
     );
}

function SignOut(){
    return auth.currentUser && (
        <button onClick={()=> auth.signout()}>Sign out</button>
    )
}
 
export default SignIn;