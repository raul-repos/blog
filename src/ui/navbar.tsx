import { Button, Group, Stack, Title } from "@mantine/core"

const Navbar = () => {
  return (
    <Stack>
      <Title>
        Raul Calvo
      </Title>
      <Group>
        <Button>Link 1</Button>
        <Button>Link 2</Button>
      </Group>
    </Stack>
  )
}

export { Navbar }