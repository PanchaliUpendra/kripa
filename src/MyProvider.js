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

    const [worker,setworker] = useState({
        admin:"",
        employee:[]
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
        wishlist:usrdata.wishlist,
        isAdmin:user.uid===worker.admin,
        admin:worker.admin,
        employee:worker.employee
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
              //reading the users data
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
                //calling user fetch
                userfetchdata();
            //reading the data of admin
            const workerdocref=doc(db,"employee",'AHp7ifFxD32JOJ8tiH3g');
            const employeefetchdata = async()=>{
                try{
                    await onSnapshot(workerdocref,(doc)=>{
                        const workerdata = doc.data();
                        setworker(prev =>({
                            ...prev,
                            admin:workerdata.admin,
                            employee:workerdata.employee
                        }));
                    })
                }catch(e){
                    console.error('you got error while fetching the workers data',e);
                }
            }
            //calling workers fetch
            employeefetchdata();
              
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
                setworker(prev=>({
                    ...prev,
                    admin:"",
                    employee:[]
                }))
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