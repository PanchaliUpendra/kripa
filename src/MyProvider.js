import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/Firebase';
import { db } from './Firebase/Firebase';
import { doc, onSnapshot } from "firebase/firestore";

function MyProvider({children}){

    const [user,setuser] = useState({
        isauthed:false,
        uid:null,
        emailverified:false
    })

    const [usrdata,setusrdata] = useState({
        wishlist:[],
        cart:[]
    })

    const sharedvalue={
        isauthed :user.isauthed,
        uid:user.uid,
        emailverified:user.emailverified,
        cart:usrdata.cart,
        wishlist:usrdata.wishlist
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              console.log(user.emailVerified);
              const tuid = user.uid;
              setuser(prev=>(
                {
                    ...prev,
                    uid:tuid,
                    isauthed:true,
                    emailverified:user.emailVerified
                }
              ))
              const usrdocref = doc(db, 'users', user.uid);
                const userfetchdata = async() =>{
                try{
                    await onSnapshot(usrdocref, (doc) => {
                    
                    const usrdata=doc.data();
                    setusrdata(prev=>({
                        ...prev,
                        wishlist:usrdata.wishlist,
                        cart:usrdata.cart
                    }))
                });
                }catch(e){
                    console.error('you got error while fetching the user data',e);
                }
                }
        
                userfetchdata();
              // ...
            } else {
              // User is signed out
                setuser(prev=>(
                    {
                        ...prev,
                        uid:null,
                        isauthed:false,
                        emailVerified:false
                    }
                ))
            }
          });
          return () => {
            // Unsubscribe when the component unmounts
            unsubscribe();
          };
    },[]);
    return(
        <MyContext.Provider value={sharedvalue}>
            {children}
        </MyContext.Provider>
    );
}

export default MyProvider;