import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box} from '@mui/system';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';

export default function Reviews(props){
    return (
        <div>
            <Box className="reviews">
                <h4>Reviews</h4>
                <p>1/12 <ArrowBackIcon/><ArrowForwardIcon /></p>
            </Box>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <div className='background'></div>
                    <div className='reviewcard'>
                        <div className='profile'>
                            <img src="./assets/cardimg1.png" className="cardimg1" />
                            <p className='para'>Hellen Jummy</p>
                        </div>
                        <span className='para1'>PALO ALTO, CA</span>
                        <div className='para2'>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Vitae in donec in nisi vitae. 
                                Vestibulum pellentesque eget laoreet adipiscing. 
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='background'></div>
                    <div className='reviewcard'>
                        <div className='profile'>
                            <img src="./assets/cardimg2.png" className="cardimg1" />
                            <p className='para'>Isaac Oluwatemilorun</p>
                        </div>
                        <span className='para1'>PALO ALTO, CA</span>
                        <div className='para2'>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Vitae in donec in nisi vitae. 
                                Vestibulum pellentesque eget laoreet adipiscing. 
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='background'></div>
                    <div className='reviewcard'>
                        <div className='profile'>
                            <img src="./assets/cardimg3.png" className="cardimg1" />
                            <p className='para'>Hellen Jummy</p>
                        </div>
                        <span className='para1'>PALO ALTO, CA</span>
                        <div className='para2'>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Vitae in donec in nisi vitae. 
                                Vestibulum pellentesque eget laoreet adipiscing. 
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}