'use client'

import { SignedOut, SignedIn, useUser, SignInButton, UserButton } from "@clerk/nextjs"

function Header() {
    const { user } = useUser()
    // video 34 min (https://www.youtube.com/watch?v=cso7-4oAPNQ&t=2280s)
  return (
    <div>
        { user && <h1>Hello {user?.firstName}</h1> }

        {/* breadcrumbs */}

        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>

    </div>
  )
}

export default Header