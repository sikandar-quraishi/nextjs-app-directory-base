import { authOptions } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function ServerPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }
console.log("session", session)
    return (
        <section className="flex flex-col gap-6">
             {JSON.stringify(session, null, 2)}
        </section>
    )

}
