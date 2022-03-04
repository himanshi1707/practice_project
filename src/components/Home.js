import React from 'react';
import Header from './Header';
import { Grid } from '@mui/material';
//import { Box } from '@mui/system';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Shows from './Shows';
//import Reviews from './Reviews';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    // txt:{
    //     fontSize:'80px',
    //     '@media (max-width: 600px)':{
    //         fontSize: '40px'
    //     }
    // }    
}));

export default function Home(props){
    const classes = useStyles();

    return(
        <div className="maindiv">
            <div>
                <div>
                    
                    {/*-------------------- main ------------------------------ */}

                    <div>
                        <div>
                            <div className="mainbg"></div>
                            <img src="../assets/bgimage.png" className="mainimg" />
                        </div>
                        <div className='header'>
                            <Header />
                        </div>
                        <Grid container spacing={1} className="heading" >
                            <Grid item xs={12}>
                                <h1 className="txt">Cari Cari</h1>
                            </Grid>
                            <Grid item xs={12}>
                                <p className='txt1'>
                                    Live from their sofa to yours. 
                                    Get closer to your favorite artists, and never miss out.
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                    <div className='label'>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <div className='circle'>
                                    <FavoriteBorderIcon />
                                    <p>0</p>
                                    <p>Label</p>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className='circle'>
                                    <ReviewsIcon />
                                    <p>0</p>
                                    <p>Label</p>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className='circle'>
                                    <ReviewsIcon />
                                    <p>0</p>
                                    <p>Label</p>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className='circle'>
                                    <ReviewsIcon />
                                    <p>0</p>
                                    <p>Label</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    {/* -----------------upcoming shows----------------------- */}

                    <Grid container spacing={1} style={{marginTop:'2em'}}>
                        <Grid item xs={12}>
                            <Shows/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}