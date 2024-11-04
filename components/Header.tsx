'use client'

import { SignedOut, SignedIn, useUser, SignInButton, UserButton } from "@clerk/nextjs"

function Header() {
    const { user } = useUser()

  return (
    <div className="flex items-center justify-between p-5">
        { user && <h1 className="text-2xl">Hello {user?.firstName}</h1> }

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