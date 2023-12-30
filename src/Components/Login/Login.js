import React, { useEffect, useState } from 'react';
import './Login.css';
import Footer from '../Footer/Footer';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import googleicon from '../../assests/googleicon.png';
import {signInWithPopup, GoogleAuthProvider ,sendEmailVerification} from "firebase/auth";
import { doc, getDoc, setDoc } from 'firebase/firestore';


function Login(){
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const [loginreg,setloginreg] = useState(true);
    const [open, setOpen] = React.useState(false);
    const [userreg ,setuserreg] = useState({
        email:'',
        password:'',
        cnfpassword:'',
        phone:'',
        name:''
    })

    const [userlogin,setuserlogin] = useState({
        email:'',
        password:''
    })

    // adding notifications 
    const loginsuccess = () =>toast.success('Successfully Logged In');
    const loginerror = () =>toast.error('please check your credientials');
    const loginformerror = () => toast.info('please fill the form correctly');

    const useralreadyext = () => toast.warn('user email already registered');
    const invalidmail = () => toast.warn('Invalid Mail')

    //adding the user tto sql using the fecth
    async function createNewUserInMySQL(gemail, gphone, gname , guid){
        try{
            const response = await fetch('https://kripadesigners.com/userdata.php', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        email:gemail,
                                        phone:gphone,
                                        name:gname,
                                        uid:guid
                                    })
                                });

                const data = await response.json();
                console.log(data);
        }catch(e){
            console.log('getting error while login with google in create new user in sql',e);
        }
    }

    //fetch the uid is present or not
    async function checkUserExistsInMySQL(cuid){
        try{
            const response = await fetch('https://kripadesigners.com/checkuid.php',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    uid:cuid,
                })
            });
            const res = await response.json();
            console.log("here is your check uid responsed ",res);
            return (res.message ==="false" || res.message===false)?false:true;
        }catch(e){
            console.log("you got an error while checking  user exists in mysql",e);
            return true; //while we got error, then we have to send true because , it won't add data to sql database
        }

    }

    //sign with google
    async function signinwithgoogle(){
        try{
            try{
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
                //adding data to the firestore
                const docsnapshot = await getDoc(doc(db,'users',user.uid));
                if(docsnapshot.exists()){
                    console.log('happy shopping');
                }else{
                    await setDoc(doc(db,'users',user.uid),{
                        wishlist:[],
                        cart:[]
                    });
                }
                //adding data to the mysql
                const userExistsInMySQL = await checkUserExistsInMySQL(user.uid);
                if(!userExistsInMySQL){
                    await createNewUserInMySQL(user.email,user.phoneNumber,user.displayName,user.uid);
                }
                console.log(result);
                navigate('/');
                loginsuccess();
            }catch(e){
                console.error(e);
                loginerror()
            }
        }catch(e){
            console.log('error while sign in with google');
        }finally{
            navigate('/')
        }

    }

    // function for user register

    async function usersreg(){
        setOpen(prev=>!prev);
        try{

            if(userreg.email!=='' && userreg.password!=='' && userreg.cnfpassword!=='' && userreg.password===userreg.cnfpassword && userreg.phone!=='' && userreg.name!==''){
            
            // here is process of registration 
            try {
                    const userCredential = await createUserWithEmailAndPassword(auth, userreg.email, userreg.password);
                    console.log(userCredential);
                    if(userCredential){
                        await setDoc(doc(db,'users',userCredential.user.uid),{
                            wishlist:[],
                            cart:[]
                        });
                        //adding the users data to the backend
                        const response = await fetch('https://kripadesigners.com/userdata.php', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                            email: userreg.email,
                                            phone: userreg.phone,
                                            name: userreg.name,
                                            uid:userCredential.user.uid
                                        })
                                    });

                    const data = await response.json();
                    console.log(data);
                }

                //email verification process
                await sendEmailVerification(auth.currentUser)
                .then(() => {
                    // Email verification sent!
                    navigate('/verification')
                    // ...
                }).catch((error)=>{
                    console.log('you will get error when sending the verification',error);
                });
                
            } catch (error) {
                const errorCode = error.code;
                if (errorCode === 'auth/invalid-email') {
                    invalidmail();
                } else if (errorCode === 'auth/email-already-in-use') {
                    useralreadyext();
                } else {
                    const errorMessage = error.message;
                    console.error('error code:', errorCode, 'error message', errorMessage);
                    loginerror();
                }
            }
            }else{
               await loginformerror();
            }
        }
        catch(e){
            console.log('you got an error',e);
            await loginerror();
        }finally{
            setOpen(prev=>!prev);
        }
        
    }

    // function for user login


    async function funuserlogin(){
        setOpen(prev=>!prev);
        try{
            if(userlogin.email!=='' && userlogin.password!==''){
                 await  signInWithEmailAndPassword(auth, userlogin.email, userlogin.password)
                .then((userCredential) => {
                    // Signed in 
                    // alert('successfully logged in');
                    loginsuccess();
                    navigate('/');
                    console.log(userCredential);
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode ,'error message',errorMessage);
                    // alert('please check you details')
                    loginerror();
                });
            }else{
                // alert('check you credientials')
                loginformerror();
            }
        }catch(e){
            console.error('you got an error ',e);
            // alert('sorry wrong credientials')
            loginerror();
        }finally{
            setOpen(prev=>!prev);
        }
        
    }


    useEffect(()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    },[])
    return(
        <>
        <div className='login-con'>
            <div className={loginreg?"card":"card-hover"}>
                <div className="card-inner">
                    <div className="card-front" >
                        <div className='login-form'>
                            <div className='login-form-header'>
                                <h1>Login</h1>
                            </div>
                            <div className='login-form-innner'>
                                <div className='login-form-innner-eachone'>
                                    <label>Email</label>
                                    <input placeholder='Example@gmail.com' type='email' value={userlogin.email} onChange={(e)=>setuserlogin(prev=>(
                                        {
                                            ...prev,
                                            email:e.target.value
                                        }
                                    ))}/>
                                </div>
                                <div className='login-form-innner-eachone'>
                                    <label>Password</label>
                                    <input placeholder='Password' type='password' onChange={(e)=>setuserlogin(prev=>(
                                        {
                                            ...prev,
                                            password:e.target.value
                                        }
                                    ))}/>
                                </div>
                                <button onClick={()=>funuserlogin()}>Sign In</button>
                                <div className='continue-with-google-btn' onClick={()=>signinwithgoogle()}>
                                    <img src={googleicon} alt="google-pic" className='continue-with-google-btn-img'/>
                                    Continue With Google
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="card-back" >
                        <div className='login-form'>
                                <div className='login-form-header'>
                                    <h1>Register</h1>
                                </div>
                                <div className='register-form-innner'>
                                    <div className='reg-1st-rwo'>
                                        <div className='register-form-innner-eachone'>
                                            <label>Name</label>
                                            <input placeholder='Enter Your Name' type='text' onChange={(e)=>setuserreg(prev=>(
                                                {
                                                    ...prev,
                                                    name:e.target.value
                                                }
                                            ))}/>
                                        </div>
                                        <div className='register-form-innner-eachone'>
                                            <label>Phone</label>
                                            <input placeholder='Enter Mobile Number' type='number' onChange={(e)=>setuserreg(prev=>(
                                                {
                                                    ...prev,
                                                    phone:e.target.value
                                                }
                                            ))}/>
                                        </div>
                                    </div>
                                    <div className='register-form-innner-eachone'>
                                            <label>Email</label>
                                            <input placeholder='Example@gmail.com' type='email' onChange={(e)=>setuserreg(prev=>(
                                                {
                                                    ...prev,
                                                    email:e.target.value
                                                }
                                            ))}/>
                                    </div>
                                    <div className='reg-1st-rwo'>
                                        <div className='register-form-innner-eachone'>
                                            <label>Password</label>
                                            <input placeholder='password' type='password' onChange={(e)=>setuserreg(prev=>(
                                                {
                                                    ...prev,
                                                    password:e.target.value
                                                }
                                            ))}/>
                                        </div>
                                        <div className='register-form-innner-eachone'>
                                            <label>confirm Password</label>
                                            <input placeholder='Confirm Password' type='password' onChange={(e)=>setuserreg(prev=>(
                                                {
                                                    ...prev,
                                                    cnfpassword:e.target.value
                                                }
                                            ))}/>
                                        </div>
                                    </div>
                                    <button onClick={()=>usersreg()}>Sign Up</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* navigation between login and register */}
            <div className='nav-reg-login-click'>
                {loginreg?<p>if you don't have an account? <span onClick={()=>setloginreg(prev=>!prev)}>Sign Up</span></p>:<p>already You have an account? <span onClick={()=>setloginreg(prev=>!prev)}>Sign In</span></p>}
            </div>
        </div>
        <Footer/>
        <div className="home-copy-right">
                <p>©</p>
                <p>2023 Kripa , Inc.</p>
           </div>
        {/* backdrop will comes here */}
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* adding the notifications */}
      <ToastContainer
            position="top-center"
            autoClose={2000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
            />
     
        </>
    )
}

export default Login;