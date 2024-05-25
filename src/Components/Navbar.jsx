import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../styles/navbar.css";
import '@fontsource/roboto/300.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const pages = ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact Us'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const options = ['Interior contracting','Automation','Landscape','Interior Design','Architecture','Structural Contracting']


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOptionNavigation = (op)=>{
        switch(op){
            case "Interior contracting":
                navigate("/interiorcontract")
                break
            case "Automation":
                navigate("automation")
                break
            case "Landscape":
                navigate("landscape")
                break

            case "Interior Design":
                navigate("interiordesign")
                break

            case "Architecture":
                navigate("architecture")
                break

            case "Structural Contracting":
                navigate("structuredesign")
                break

            default:
                navigate("/")
        }
    }

    const handleOpenNavMenu = (event) => {
        console.log(event.currentTarget);
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        let text = event.currentTarget?.innerText?.toLowerCase();
        switch(text){
            case "about":{
                navigate('/about');
                break;
            }
            case "services":{
                navigate('/gallery');
                break;
            }
            case "gallery":{
                navigate('/gallery');
                break;
            }
            case "blog":{
                navigate('/blog');
                break;
            }
            case "contact us":{
                navigate('/contact');
                break;
            }
            default:
                navigate("/")
        }
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };




    return (
        <AppBar position="sticky" sx={{height:"100px",justifyContent:"center",backgroundColor:"black", zIndex:1, top:"0"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box display="flex">
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textTransform: "uppercase" ,justifyContent:"center",padding:"10px"}}>
                        {pages.map((page) => {
                            return (
                                page === "Services" ? (
                                    <div className="menu-serv-wrapper">
                                         <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block',padding:"10px",fontSize:"18px",fontWeight:"600"}} className='button-service'>Services</Button>
                                         <ExpandMoreIcon sx={{color:"gray"}} className='expander-service'></ExpandMoreIcon>
                                         <div className="drop-down">
                                    
                                                {options.map((op)=>{
                                                    return (
                                                        <div className='options-main-nav' onClick={()=>handleOptionNavigation(op)}>{op}</div>
                                                    )
                                                })}
                                        
                                         </div>
                                    </div>
                                   
                                ):(
                                    <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block',padding:"10px",fontSize:"18px",fontWeight:"600"}}>
                                        {page}
                                    </Button>
                                )
                            )
                        })}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar