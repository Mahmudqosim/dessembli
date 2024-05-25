import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
} from "@aws-amplify/ui-react"
import { HiBell, HiChat, HiHome, HiUsers } from "react-icons/hi"
import { Link, useLocation } from "react-router-dom"
import dessembliLogo from "../assets/dessembli.svg"

const menuItems = [
  { name: "Home", Icon: HiHome, active: "" },
  { name: "Chats", Icon: HiChat, active: "chats" },
  { name: "Buddies", Icon: HiUsers, active: "buddies" },
  { name: "Notifications", Icon: HiBell, active: "notifications" },
]

const Navbar = () => {
  const { pathname } = useLocation()

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

      <Flex display={{ base: "none", medium: "flex" }}>
        {menuItems.map((menu, index) => {
          const isMenuActive = menu.active === pathname.split("/")[1]

          return (
            <Button
              as={Link}
              to={`/${menu.active}`}
              key={index}
              backgroundColor={
                isMenuActive
                  ? "var(--amplify-colors-neutral-10)"
                  : "transparent"
              }
              color={
                isMenuActive
                  ? "var(--amplify-colors-neutral-500)"
                  : "var(--amplify-colors-neutral-40)"
              }
              borderRadius="8rem"
              gap=".5rem"
              /* _hover={{
                  bg: isMenuActive ? "var(--amplify-colors-neutral-20)" : "none",
                  color: "var(--amplify-colors-neutral-500)",
                }} */
            >
              <menu.Icon fontSize="1.25rem" /> {isMenuActive ? menu.name : ""}
            </Button>
          )
        })}

        <Menu
          trigger={
            <MenuButton borderRadius="8rem">
              <Image
                alt="Amplify logo"
                src="/amplify-logo.svg"
                objectFit="initial"
                height="1rem"
                width="1rem"
              />
            </MenuButton>
          }
        >
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
        </Menu>
      </Flex>
    </Flex>
  )
}

export default Navbar
