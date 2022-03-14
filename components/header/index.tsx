import React, { useState } from 'react';
import Link from "next/link"
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import useMediaQuery from "../../utils/customHooks/useMediaQuery";
import { Icon } from '@iconify/react';
import MobileNavMenu from '../mobileNavMenu';

const Header = ({ children }: any) => {
  const router = useRouter();
  const theme = localStorage.getItem('theme');
  const { data: session, status } = useSession();
  const [useQuery] = useMediaQuery('screen and (min-width: 1028px)');
  const [navIsShow, setNavIsShow] = useState<boolean>(true);
  const handleMShow = () => {
    setNavIsShow(!navIsShow);
  }
  console.log(session, 'session')
  
  return (
    <header className="header">
      <nav className="header-nav">
        {useQuery ?
            <>
            <div className="left-nav">
              <Link href="/">
                <a className="home-logo-image">
                  {theme === 'dark' ?
                  <img src="/images/logo/logo-d.png" alt="logo" />
                    :
                    <img src="/images/logo/logo-w.png" alt="logo" /> 
                  }
                </a>
              </Link>
              <ul>
                <li className={router.asPath === "/about" ? "active" : ""}>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li className={router.asPath === "/contents" ? "active" : ""}>
                  <Link href="/contents">
                    <a>Contents</a>
                  </Link>
                </li>
                <li className={router.asPath === "/contact_us" ? "active" : ""}>
                  <Link href="/contact_us">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-nav">
                  {status === 'authenticated' ?
                  (
                    <div>
                      <span className={router.asPath === "/dashboard" ? "active" : ""}>
                        <Link href="/dashboard">
                          {session?.user?.name}
                        </Link>
                      </span>
                      <button className="btn sign-out--btn" onClick={()=> signOut()}>Log out</button>
                    </div>
                  ) 
                  : 
                  (
                    <>
                      <span className={router.asPath === "/login" ? "active" : ""}>
                        <Link href="/login">
                          Log In
                        </Link>
                      </span>
                      <span className={router.asPath === "/signup" ? "active" : ""}>
                        <Link href="/signup">
                          Sign Up
                        </Link>
                      </span>
                    </>
                  )}
              {children && children}
            </div>   
            </>
            :
            <>
              <div className="mobile-nav-menu">
                <button className="btn mobile-nav-menu--btn" onClick={() => setNavIsShow(!navIsShow)}>
                  <Icon className="menu" icon="bx:menu" />    
                </button>
                <div className="mobile-nav-logo--area">
                  <Link href="/">
                    <a className="home-logo-image">
                      {theme === 'dark' ?
                      <img src="/images/logo/logo-d.png" alt="logo" />
                        :
                        <img src="/images/logo/logo-w.png" alt="logo" /> 
                      }
                    </a>
                  </Link>
                </div>
              </div>
              <MobileNavMenu navIsShow={navIsShow}>
                <ul>
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contents">
                      <a>Contents</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact_us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </MobileNavMenu>
            </>
        }
      </nav> 
    </header>
  )
}

export default Header;