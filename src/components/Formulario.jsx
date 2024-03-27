import { useState } from 'react'
import {
  Autocomplete,
  Button,
  TextField,
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material'

function Formulario() {
  const [estilo, setEstilo] = useState('filled')

  const paises = [
    { label: 'España', value: '1' },
    { label: 'Argentina', value: '2' },
    { label: 'Colombia', value: '3' }
  ]

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} style={{ backgroundColor: 'grey' }}>
          <Typography variant="h2" component="h1" style={{ padding: '10px' }}>
            Formulario Material UI
          </Typography>
        </Grid>

        <Grid item xs={12} md={12} lg={6}>
          <TextField
            fullWidth
            id="email"
            label="Correo Electrónico"
            variant={estilo}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField fullWidth id="nombre" label="Nombres" variant={estilo} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <TextField
            fullWidth
            id="apellido"
            label="Apellidos"
            variant={estilo}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <FormControl fullWidth variant={estilo}>
            <InputLabel id="labelGenero">Género</InputLabel>
            <Select labelId="labelGenero" id="genero" label="Genero">
              <MenuItem value={1}>Mujer</MenuItem>
              <MenuItem value={2}>Hombre</MenuItem>
              <MenuItem value={3}>Otro</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={8} lg={5}>
          <Autocomplete
            disablePortal
            id="país"
            options={paises}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} variant={estilo} label="País" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Button variant="contained" size="large" fullWidth>
            Enviar
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => setEstilo('filled')}>Filled</Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => setEstilo('standard')}>Standard</Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => setEstilo('outlined')}>Outlined</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Formulario
