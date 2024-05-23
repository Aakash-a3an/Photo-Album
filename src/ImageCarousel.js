import React, { useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const ImageCarousel = ({ open, setOpen, images, selectedIndex, setSelectedIndex }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePrev();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Image Carousel</DialogTitle>
      <DialogContent>
        <img src={images[selectedIndex]} alt={`Image ${selectedIndex}`} style={{ width: '100%' }} />
      </DialogContent>
      <DialogActions>
        <IconButton onClick={handlePrev} color="primary">
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton onClick={handleNext} color="primary">
          <KeyboardArrowRight />
        </IconButton>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageCarousel;
