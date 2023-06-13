import { Group, Paper } from '@mantine/core'
import { Doodle, Footer, Navbar, Presentation } from '@ui'





const PostList = () => {
  return (
    <Paper>
      Esto es una lista de post
    </Paper>
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
