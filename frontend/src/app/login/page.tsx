'use client'

import { signIn, useSession } from 'next-auth/react'
import Button from '@mui/material/Button'

export default function Page() {
  //NextAuth(Google Provider)を使った0Auth認証(GCPで設定)
  //GCP:https://console.cloud.google.com/
  //参考記事:https://reffect.co.jp/react/next-auth#Google_Provider
  const { data: session, status } = useSession()
  return (
    <div>
      {status !== 'loading' && !session && (
        <div>
          <p>You are not signed in.</p>
          <Button variant='contained' onClick={() => signIn('google')}>
            LOGIN😎
          </Button>
        </div>
      )}
    </div>
  )
}
