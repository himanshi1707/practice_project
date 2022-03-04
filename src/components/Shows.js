import { CardContent, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Card } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Reviews from './Reviews';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function Shows(props){
    return (
        <div className="showsbg">
            <Box className="shows">
                <div className="showsheader">
                    <h3>Upcoming Shows</h3>
                    <p style={{color: '#E5C558'}}>View all</p>
                </div>
                <Grid container spacing={1} className="showscard">
                    <Grid item xs={3}>
                        <div className='background2'></div>
                        <Card className='img1'>
                            <CardActionArea>
                                <img src="./assets/photo1.png" className="actorimg" />
                            </CardActionArea>
                            <CardContent style={{backgroundColor: '#111229',color:'#ffffff'}}>
                                <p className='tag'>Folk</p>
                                <p className='name'>Benny Dayal</p>
                                <p className='info'>
                                    More Info <ArrowForwardIcon />
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='background2'></div>
                        <Card className='img1'>
                            <CardActionArea>
                                <img src="./assets/photo2.png" className="actorimg" />
                            </CardActionArea>
                            <CardContent style={{backgroundColor: '#111229',color:'#ffffff'}}>
                                <p className='tag'>Bollywood</p>
                                <p className='name'>Vijay Yesudas</p>
                                <p className='info'>More Info<ArrowForwardIcon /></p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} className="hidecard">
                        <div className='background2'></div>
                        <Card className='img1'>
                            <CardActionArea>
                                <img src="./assets/photo3.png" className="actorimg" />
                            </CardActionArea>
                            <CardContent style={{backgroundColor: '#111229',color:'#ffffff'}}>
                                <p className='tag'>Folk</p>
                                <p className='name'>Andrea Jeremiah</p>
                                <p className='info'>More Info <ArrowForwardIcon /></p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} className="hidecard1">
                        <div className='background2'></div>
                        <Card className='img1'>
                            <CardActionArea>
                                <img src="./assets/photo4.png" className="actorimg" />
                            </CardActionArea>
                            <CardContent style={{backgroundColor: '#111229',color:'#ffffff'}}>
                                <p className='tag'>Folk</p>
                                <p className='name'>Shilpa Rao</p>
                                <p className='info'>More Info <ArrowForwardIcon /></p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box style={{marginTop:'6em'}}>
                    <Reviews />
                </Box>
            </Box>
        </div>
    )
}