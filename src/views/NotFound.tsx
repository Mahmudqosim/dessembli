import { Flex, Heading, Link, Text } from "@aws-amplify/ui-react"
import { Link as ReactRouterLink } from "react-router-dom"

const NotFound = () => {
  return (
    <Flex
      direction="column"
      gap={4}
      alignItems="center"
      justifyContent="center"
      width="full"
    >
      <Flex direction="column" alignItems="center">
        <Heading fontSize="6rem" fontWeight="bold">
          404
        </Heading>
        <Text color="gray.500">PAGE NOT FOUND</Text>
        <Text fontSize=".875rem" color="gray.500">
          Please check the url in the address bar and try again.
        </Text>
      </Flex>

      <ReactRouterLink to="/auth">
        <Link
          padding="5px 20px"
          borderRadius="lg"
          color="white"
          fontSize="1.25rem"
          backgroundColor="black"
        >
          Go to Home
        </Link>
      </ReactRouterLink>
    </Flex>
  )
}

export default NotFound
