import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../App.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

function LinkButtons() {
  return (
    <div className='button_fam'>
      <Stack direction="column" spacing={4} width={300}>
        <Button startIcon={<LanguageIcon />} href='https://micentrowa.org/' variant="contained" target='_blank'>
          Mi Centro Website
        </Button>

        <Button startIcon={<FacebookIcon/>} href='https://www.facebook.com/Mi-Centro-Tacoma-WA-109997788781437' variant="contained" target='_blank'>
          Facebook
        </Button>

        <Button startIcon={<InstagramIcon/>} variant="contained" href="https://www.instagram.com/micentrowa/" target='_blank'>
          Instagram
        </Button>

        <Button  startIcon={<VolunteerActivismIcon/>} variant="contained" href="https://micentrowa.org/donate/" target='_blank'>
          Donations
        </Button>
      </Stack>
    </div>
  );
}

export default LinkButtons;
