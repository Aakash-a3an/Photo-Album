import React from 'react';
import { Typography,AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import { useTheme } from "@mui/material";


const cards = [1,2,3,4,5,6,7,8,9,10,11,12]


const App = () => {

    const theme = useTheme();
    const container = {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6),
    }
    const icon = {
        marginRight: '20px'
    }
    const button ={
        marginTop: '40px'
    }
    const cardGrid = {
        padding: '20px 0'
    }
    const cardC = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
    const cardMedia = {
        paddingTop: '56.25%'
    }
    const cardContent = {
        flexGrow: 1
    }
    const footers = {
        backgroundColor: theme.palette.background.paper,
        padding: '100px'
    }

  return (
    <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <CameraEnhanceIcon sx={icon} />
                <Typography variant='h6'>
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm" sx={container}>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom >
                        Motivational Quote
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph >
                        Beauty can be seen in all things, seeing and composing the beauty is what separates the snapshot from the photograph.
                    </Typography>
                    <div sx={button}>
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
            <container sx={cardGrid} maxWidth="md" >
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} sx={cardC} xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia sx={cardMedia} image='https://source.unsplash.com/random/?motivational-quote/' title='Image Title' />
                                <CardContent sx={cardContent}>
                                    <Typography gutterBottom variant='h5'>
                                    Heading
                                    </Typography>
                                    <Typography>
                                    This is the description section of the image.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary' >View</Button>
                                    <Button size='small' color='primary' >Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </container>
        </main>
        <footer sx={footers}>
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>
            <Typography variant='h6' align='center' color='textSecondary' >
                    I did this project to learn and practice Material UI
            </Typography>
        </footer>

    </>
  )
}



export default App