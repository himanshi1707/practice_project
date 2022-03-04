import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import '../css/home.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuIcon from '@mui/icons-material/Menu';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const useStyles = makeStyles((theme) => ({
    // nav:{
    //   width: '98.5vw',
    //   '@media(max-width: 600px)':{
    //     width:'30vw'
    //   }
    // }
  }));

export default function Header(props){
  const classes = useStyles();  
  return (
        <header>
            <div className='main'>
                <nav>
                    <img src="./assets/image.png" className='headerimg' />
                </nav>
                <div className='search'>
                  <ul className='list'>
                    <li className='input1'>
                      <Search className='search'>
                        <SearchIconWrapper >
                          <SearchIcon className='searchicon'/>
                        </SearchIconWrapper>
                          <StyledInputBase
                            className="searchinput"
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                          />
                      </Search>
                    </li>
                    <li className='hide'>Help</li>
                    <li className='hide1'>Account</li>
                    <li className='icon'><BusinessCenterIcon className="businessicon" /></li>
                    <li className='menuicon'><MenuIcon className="icon1"/></li>
                  </ul>
                </div>
            </div>
        </header>
        // <Box sx={{ flexGrow: 1}} className={classes.nav}>
        //     <AppBar position="static" color="transparent" className='responsivenav'>
        //         <Toolbar className='main'>
        //             {/* <IconButton
        //             size="large"
        //             edge="start"
        //             color="inherit"
        //             aria-label="open drawer"
        //             sx={{ mr: 2 }}
        //             >
        //             <MenuIcon />
        //             </IconButton>
        //             <Typography
        //             variant="h6"
        //             noWrap
        //             component="div"
        //             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        //             >
        //             MUI
        //             </Typography> */}
        //             <div>
        //                 <img src="./assets/image.png" className='headerimg' />
        //             </div>
        //             <div>
        //                 <ul className='list'>
        //                     <li>
        //                         <Search>
        //                             <SearchIconWrapper>
        //                                 <SearchIcon />
        //                             </SearchIconWrapper>
        //                             <StyledInputBase
        //                                 placeholder="Search…"
        //                                 inputProps={{ 'aria-label': 'search' }}
        //                             />
        //                         </Search>
        //                     </li>
        //                     <li>Help</li>
        //                     <li>Account</li>
        //                     <li><BusinessCenterIcon/></li>
        //                 </ul>
        //             </div>
        //         </Toolbar>
        //     </AppBar>
        // </Box>
    )
}