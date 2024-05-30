import { auth, signOut } from '@/app/auth'

export default async function Dashboard() {
  let session = await auth()

  return (
    <div className="flex h-screen bg-black">
      <div className="flex h-screen w-screen flex-col items-center justify-center space-y-5 text-white">
        You are logged in as {session?.user?.email}
        <SignOut />
      </div>
    </div>
  )
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button type="submit" className="my-4 bg-white px-3 py-2 text-black">
        Sign out
      </button>
    </form>
  )
}
