// import React from 'react'

import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom'
// import zIndex from '@mui/material/styles/zIndex';
// import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const About = () => {

  const { name } = useParams();
  const history = useNavigate();

  return (
    <div className='container'>
      {/* <h1 style={{color:'white',marginBottom:'500px'}}>About</h1> */}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae odio, ab voluptate laboriosam nesciunt eos f
                acere consequuntur itaque minus! Ipsam facilis corporis voluptas laboriosam placeat nemo neque nulla fugit.</p> */}

      <Card sx={{ minHeight: '280px', width: 500, margin: '0px 700px 50px 0px', opacity: '0.8' }}>

        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=400"
            srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
            // transform:'1.2'
            // transform:'1.2',
            // zIndex:'-1'
            // opacity:"1"
          }}
        />



        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
            {name} National Park
          </Typography>

          <Box sx={{ '& button': { m: 1 }, }}>

            <div>
              {/* <Link to='/contact'> */}
              <Button className='btn' variant="contained" size="small" onClick={(() => { history("/contact") })}>
                contact
              </Button>
              {/* </Link> */}

              {/* <Link to='/'> */}
              <Button className='btn' variant="contained" size="small" onClick={(() => { history("/") })}>
                back
              </Button>
              {/* </Link> */}

            </div>
          </Box>

          {/* <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          California, USA
        </Typography> */}
        </CardContent>
      </Card>


      <section>
        {/* <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores sint odit quis cumque voluptas
          velit magnam alias dolor, minima commodi, unde modi reprehenderit iusto suscipit eligendi at ex est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum placeat assumenda veniam rem animi aperiam vel iusto officiis, vero molestias quam totam, laudantium accusamus eius sunt ea corporis.
          Eius dicta est vel alias, accusantium delectus sit unde culpa explicabo enim possimus suscipit dolor illum voluptates!</p> */}
      </section>

    </div>
  )
}

export default About
