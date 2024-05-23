import React, { useState, useEffect } from 'react';
import { Typography, AppBar, Card, CardMedia, CssBaseline, Grid, Toolbar, Container, TextField, Box, Button, IconButton } from '@mui/material';
import { useTheme } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageCarousel from './ImageCarousel';
import { KeyboardArrowUp } from '@mui/icons-material';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';

const App = ({ showSearchButton = true }) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("quote");
  const [currentSearch, setCurrentSearch] = useState("quote");
  const [cards, setCards] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);
  const [openCarousel, setOpenCarousel] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const container = {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  };
  const icon = {
    marginRight: '20px'
  };
  const button = {
    marginTop: '40px'
  };
  const cardGrid = {
    padding: '20px 0'
  };
  const cardC = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  };
  const cardMedia = {
    paddingTop: '56.25%',
    position: 'relative',
    borderRadius: '8px',
    cursor: 'pointer'
  };
  const footers = {
    backgroundColor: theme.palette.background.paper,
    padding: '100px'
  };

  useEffect(() => {
    loadMoreCards();
  }, []); // Load initial set of cards

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === 'Enter') {
      setCurrentSearch(searchQuery);
      setCards([]);
      setLastIndex(0);
      loadMoreCards();
    }
  };

  const loadMoreCards = () => {
    const newCards = Array.from({ length: 12 }, (_, i) => lastIndex + i + 1);
    setCards(prevCards => [...prevCards, ...newCards]);
    setLastIndex(lastIndex + 12);
  };

  const getImageUrl = (index) => {
    return `https://source.unsplash.com/random/?${currentSearch}/${index}`;
  };

  // Function to open the carousel with selected images
  const handleImageClick = (index) => {
    const selectedIndex = cards.indexOf(index);
    setOpenCarousel(true);
    setCarouselImages(cards.map((card) => getImageUrl(card)));
    setSelectedIndex(selectedIndex);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <ControlCameraIcon sx={icon} />
          <Typography variant='h6'>
            Focal
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" sx={container}>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Search Images
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Beauty can be seen in all things, seeing and composing the beauty is what separates the snapshot from the photograph.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <TextField
                variant="outlined"
                label="Search Images"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleSearchSubmit}
                sx={{ width: '100%', maxWidth: 500 }}
              />
              {showSearchButton && (
                <Button variant='contained' color='primary' onClick={handleSearchSubmit} sx={{ ml: 2 }}>
                  Search
                </Button>
              )}
            </Box>
          </Container>
        </div>
        <Container sx={cardGrid} maxWidth="md">
          <InfiniteScroll
            dataLength={cards.length}
            next={loadMoreCards}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollThreshold={0.9}
          >
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card onClick={() => handleImageClick(card)} sx={{ position: 'relative', borderRadius: '8px', cursor: 'pointer' }}>
                    <CardMedia
                      sx={cardMedia}
                      image={getImageUrl(card)}
                      title='Image Title'
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
        </Container>
      </main>
      <footer sx={footers}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
       
        <Typography variant='h6' align='center' color='textSecondary'>
          I did this project to learn and practice Material UI
        </Typography>
      </footer>
      <IconButton onClick={handleScrollTop} style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 999, color: theme.palette.primary.main }}>
        <KeyboardArrowUp />
      </IconButton>
      <ImageCarousel open={openCarousel} setOpen={setOpenCarousel} images={carouselImages} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </>
  );
};

export default App;
