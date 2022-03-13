import React, { FC, useState, useRef } from 'react'
import Head from 'next/head'
import PageWithLayoutType from '../../types/pageWithLayoutType';
import MainLayout from '../../components/layouts/Main';
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login: FC = () => {
  const [formStatus, setFormStatus] = useState<string>();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      console.log(result);
      setFormStatus(`log in: ${result}`);
      router.replace("/dashboard")
    } catch(e: any) {
      console.log(e);
      setFormStatus(`Error Occured: ${e.message}`);
    }
  }

  const { data: session, status } = useSession();
  const router = useRouter();
  
  if (status === "authenticated") {
    router.replace("/dashboard");
    return (
      <div>
        <h1>Log in</h1>
        <div>You are already logged in.</div>
        <div>Now redirect to main page.</div>
      </div>
    );
  }


  return (
    <div className="main-container">
      <Head>
        <title>Next Blog Login</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1>Login</h1>
      <div>
        <div>
          <form onSubmit={submitHandler}>
            <div className='form-input small'>
              <label htmlFor="email">
                Email
              </label>
              <input 
                id="email"
                type="text" 
                required
                ref={emailInputRef}  
              />
            </div>
            <div className='form-input small'>
              <label htmlFor="password">
                 Password
              </label>
              <input 
                id="password"
                type="password" 
                required
                ref={passwordInputRef}  
              />
            </div>
            <p>{formStatus}</p>
            <div>
              <button className='btn' type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

(Login as PageWithLayoutType).layout = MainLayout

export default Login