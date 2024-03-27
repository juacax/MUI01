import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  titulo: { flexGrow: 1 },
  appBar: {
    justifyContent: 'center'
  }
}))

function NavBar() {
  const clases = useStyles()

  return (
    <AppBar position="fixed">
      <Toolbar className={clases.appBar}>
        <Typography variant="h6" component="h1">
          MUI01
        </Typography>

        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Empresa</Button>
        <Button color="inherit">Servicios</Button>
        <Button color="inherit">Clientes</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
