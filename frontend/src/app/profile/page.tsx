'use client'

import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Button from '@mui/material/Button'

export default function Page() {
  const { data: session, status } = useSession()
  // test
  return (
    <>
      {status === 'loading' && <p>Loading...</p>}
      {status !== 'loading' && session && (
        <div>
          <p>Welcome!! NCS MUSIC App, {session?.user?.name}</p>
          <Button variant='contained' onClick={() => signOut()}>
            logout👋
          </Button>
        </div>
      )}
    </>
  )
}
