import { Outlet } from "react-router-dom"
import { Flex, Authenticator, Button } from "@aws-amplify/ui-react"
import { useEffect, useState } from "react"
import { getCurrentUser, signOut } from "aws-amplify/auth"
import Navbar from "../components/Navbar"

export interface USER_TYPE {
  username: string
  userId: string
}

const DashboardLayout = () => {
  const [user, setUser] = useState<USER_TYPE | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null)

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const { username, userId } = await getCurrentUser()

        setUser({
          username,
          userId,
        })

        setIsAuthenticated(true)
        setLoading(false)
      } catch (error) {
        console.log("Error", error)
        setIsAuthenticated(false)
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const handleSignOut = async () => {
    
    console.log(user, loading)
    
    await signOut()
  }

  if (isAuthenticated !== null && !isAuthenticated) {
    return (
      <Flex alignItems="center" justifyContent="center" paddingTop="10rem">
        <Authenticator />
      </Flex>
    )
  }

  return (
    <>
    <Navbar />
      <Flex>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </Flex>
      <Outlet />
    </>
  )
}

export default DashboardLayout
