import { Authenticator, Button, Flex, Image } from "@aws-amplify/ui-react"
import { getCurrentUser, signOut } from "aws-amplify/auth"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { amplifyClient } from "../amplifyClient"
import dessembliLogo from "../assets/dessembli.svg"
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

        if (userId) {
          console.log(userId)
          
          const { data: user, errors } = await amplifyClient.models.User.get(
            { id: userId },
            { authMode: "userPool" }
          )
          
          console.log(user, errors)
        }

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
      <Flex
        alignItems="center"
        direction={"column"}
        gap="2rem"
        justifyContent="center"
        paddingTop="8rem"
        paddingBottom="5rem"
      >
        <Image src={dessembliLogo} alt="Dessembli" height="3rem" />
        <Authenticator signUpAttributes={["name"]} className="auth-wrapper" />
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
