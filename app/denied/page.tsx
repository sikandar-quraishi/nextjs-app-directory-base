import Link from 'next/link'
import React from 'react'

const Denied = () => {
  return (
    <div>You are not authorized for Admin Role, Go to SignIn page <Link href="/auth/signin">"[SignIn]"</Link></div>
  )
}

export default Denied