import { Flex, Image } from "@aws-amplify/ui-react"
import { Link } from "react-router-dom"
import dessembliLogo from "../assets/dessembli.svg"

const Navbar = () => {
  return (
    <Flex
      width="full"
      padding="1rem 2.5rem"
      backgroundColor="white"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top="0"
    >
      <Link to="/">
        <Image height="2rem" src={dessembliLogo} alt="lorgger" />
      </Link>
    </Flex>
  )
}

export default Navbar
