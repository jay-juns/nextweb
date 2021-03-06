import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const ProtectedRoute = ({ children } : {
  children: React.ReactNode
}) => {

  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    if(status === 'unauthenticated') {
      router.push('/')
    }
  }, [router, status])

  if(status === 'unauthenticated') return null;

  return(
    <>
      {children}
    </>
  )
}

export default ProtectedRoute;