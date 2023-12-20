import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/Firebase';

function MyProvider({children}){

    const [user,setuser] = useState({
        isauthed:false,
        uid:null
    })

    const sharedvalue={
        isauthed :user.isauthed,
        uid:user.uid
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const tuid = user.uid;
              setuser(prev=>(
                {
                    ...prev,
                    uid:tuid,
                    isauthed:true
                }
              ))
              // ...
            } else {
              // User is signed out
                setuser(prev=>(
                    {
                        ...prev,
                        uid:null,
                        isauthed:false
                    }
                ))
            }
          });
    },[]);
    return(
        <MyContext.Provider value={sharedvalue}>
            {children}
        </MyContext.Provider>
    );
}

export default MyProvider;