import React from 'react';
import {authOptions} from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"


const Admin  = async () => {
  const session = await getServerSession(authOptions)
console.log("session", session)
    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

  return (
    <div>This is the admin panel. Only Admin can access this.</div>
  )
}

export default Admin