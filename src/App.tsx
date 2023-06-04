import { Text, Group, NavLink, Title, Stack, Button, Paper, Image } from '@mantine/core'

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

const Presentation = () => {
  return (
    <Paper>
      <Title>
        Hola, soy Raul!
      </Title>
      <Text>
        Bienvenido a mi blog, vas a encontrar post sobre lo que voy aprendiendo, enfocado especialmente en desarrollo web y arquitectura web.
      </Text>
    </Paper>
  )
}

const Doodle = () => {
  return (
    <Image src='../assets/avatar.svg' alt='doodle'></Image>
  )
}

const PostList = () => {
  return (
    <Paper>
      Esto es una lista de post
    </Paper>
  )
}


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


function App() {

  return (
    <>
      <Navbar />
      <Group>
        <Presentation />
        <Doodle />
      </Group>
      <PostList />
      <Footer />
    </>
  )
}

export default App
