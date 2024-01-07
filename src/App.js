import React from 'react';
import { Typography,AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';

const App = () => {
  return (
    <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <CameraEnhanceIcon />
                <Typography variant='h6'>
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom >
                        Photo Album
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph >
                        Beauty can be seen in all things, seeing and composing the beauty is what separates the snapshot from the photograph.
                    </Typography>
                    <div>
                        <Grid container spacing={2} justifyContent="center" alignItems="center" >
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    See My Photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>

    </>
  )
}

export default App