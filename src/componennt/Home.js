// import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
// import AspectRatio from '@mui/joy/AspectRatio';
// import { grey, red } from '@mui/material/colors';


const Home = () => {

  const history = useNavigate();



  return (

    // < className="bap">
    <div className='container'>
      {/* <h1>home</h1> */}







      <Card sx={{ maxWidth: 600, margin: '40px 750px 50px 0px', opacity: '0.8' }}>
        <div className="component">
          <CardMedia

            sx={{ height: 200, color: 'white' }}
            image="https://images.pexels.com/photos/12977998/pexels-photo-12977998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="green iguana"
          />




          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Visit our Natur Park
            </Typography>
            <Typography variant="body2" color="text.secondary"
              style={{ color: 'white' }}>
              {/* Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sed veritatis cupiditate pariatur
              culpa beatae ullam est repudiandae neque quasi excepturi, nemo officia quis vero explicabo. */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facere assumenda sequi nisi minus accusantium enim consectetur eos amet quibusdam dignissimos? Dolore cupiditate fugit,
              modi cumque rem neque quis reiciendis assumenda quasi sint quaerat aut in dolores aperiam, sit nobis
              a deserunt! Asperiores in impedit delectus hic quos nemo ipsa expedita.
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>



            <Box sx={{ '& button': { m: 1 }, }}>
              <div>
                {/* <Link to='/contact'> */}
                <Button className='btn' variant="contained" size="small" onClick={(() => { history("/contact") })}>
                  Contact
                </Button>
                {/* </Link> */}

                {/* <Link to='/about'> */}
                <Button className='btn' variant="contained" size="small" onClick={(() => { history("/about") })}>
                  About
                </Button>
                {/* </Link> */}

              </div>
            </Box>





            {/* <Button size="small">Share</Button> */}

            {/* <Link  to='/'>
                        <Button  variant="contained" size="small">
                            home
                        </Button>
                    </Link> */}

          </CardActions>
        </div>
      </Card>



    </div>

  )
}

export default Home
