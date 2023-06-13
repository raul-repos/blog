import { Group, NavLink, Text } from "@mantine/core"

const Footer = () => {
  return (
    <>
      <Text m={'auto'}>Made by Raul 2023</Text>
      <Group>
        <NavLink label='astro' />
        <NavLink label='mantine' />
        <NavLink label='github' />
      </Group>
    </>
  )
}

export { Footer }