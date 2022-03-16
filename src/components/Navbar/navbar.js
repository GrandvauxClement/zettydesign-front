import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import logoWhite from "../../assets/images/logoBlancFondBleu.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const pages = [
    {
        name: 'Mes réalisations',
        url: ''
    },
    {
        name: 'Contact',
        url: '#contact'
    }];
const settings = [
        {
            name: 'Création Graphique',
            url: '/creation-graphique'
        },
        {
            name: 'Community Management',
            url: '/community-management'
        },
        {
            name: 'Stratégie de communication',
            url: '/strategie-communication'
        }
    ];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

   /* return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                   <Link to="/" style={{color: "white"}} className='menuLink'>
                       <img src={logoWhite} alt="zetty design" style={{height: "100px"}}/>
                   </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
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
                            <MenuItem
                                key="Mes Services"
                                onClick={handleOpenUserMenu}
                            >
                                <Typography textAlign="center">Mes Services</Typography>
                            </MenuItem>
                            {pages.map((page) => {
                                return page.name === 'Contact' ?
                                    <a href="#contact" key={page.name}>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page.name}</Typography>
                                        </MenuItem>
                                    </a>:
                                    <Link to={page.url} key={page.name}>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page.name}</Typography>
                                        </MenuItem>
                                    </Link>
                            })}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onMouseOver={handleOpenUserMenu}
                            key="Mes Services"
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            Mes Services
                        </Button>

                        {pages.map((page) => {
                            return page.name === 'Contact' ?
                                <a href={page.url} key={page.name} className='menuLink'>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        {page.name}
                                    </Button>
                                </a>
                                :<Link to={page.url} key={page.name} className='menuLink'>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        {page.name}
                                    </Button>
                                </Link>
                        })}
                    </Box>

                    {
                        <Menu
                            sx={{ mt: '45px', ml: '80px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <Link to={setting.url} className='linkBlue' key={setting.name}>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );*/
    return (
        <Navbar style={{backgroundColor: '#4babff', padding: 0}} expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/" style={{color: "white"}}>
                    <img src={logoWhite} alt="zetty design" style={{height: "70px"}}/>
                    Zetty Design
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-3">
                        <NavDropdown title="Mes Services" id="basic-nav-dropdown" className="ms-3">
                            <NavDropdown.Item href="/creation-graphique">
                                Création Graphique
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/community-management">
                                Community Management
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/strategie-communication">
                                Stratégie de communication
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={{color: "white", fontSize: "1.3em"}} className="ms-3">
                            Mes Réalisations
                        </Nav.Link>
                        <Nav.Link style={{color: "white", fontSize: "1.3em"}} href="#contact" className="ms-3">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
export default NavBar;