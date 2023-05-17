import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import React, { useEffect, useState } from 'react';
import useAuth from "../hook/useAuth";
import { IPost } from "./Login_signup/Login";
import objType from '../ContextApi/AuthProvide'

const page = ['Login', 'SignUp', 'DashBoard', "Notes"];

export const Nav = () => {
    const { setAuth, setAuthFlag, authflag } = useAuth();

    const [loggedIn, setloggedIn] = useState<string | null>("")

    const handleLogOut = (): void => {
        sessionStorage.removeItem('user')
        sessionStorage.setItem("authenticate", "notAuthenticated")
        setAuth("")
        setAuthFlag(!authflag)
    }

    useEffect(() => {
        console.log("Nav rendered");
        let authState = sessionStorage.getItem("authenticate")
        console.log(loggedIn);

        if (authState) {
            setloggedIn(authState)
        }

    }, [loggedIn, authflag])

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/">
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    </Link>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
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
                        To-Do-App
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"

                            // onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
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

                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
                        {loggedIn == "notAuthenticated" && <Button
                            component={Link}
                            key={page[0]}
                            to="/Login"
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page[0]}
                        </Button>}
                        {loggedIn == "notAuthenticated" && <Button
                            component={Link}
                            key={page[1]}
                            to="/signUp"
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page[1]}
                        </Button>}


                        {loggedIn == "loggedIn" && <Button
                            component={Link}
                            key={page[2]}
                            to="/dashBoard"
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page[2]}
                        </Button>}
                        {loggedIn == "loggedIn" && <Button
                            component={Link}
                            key={page[3]}
                            to="/notes"
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block', ml: 2 }}
                        >
                            {page[3]}
                        </Button>}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {loggedIn == "loggedIn" && <Button
                            component={Link}
                            // key={page[2]}
                            to="/"
                            onClick={handleLogOut}
                            // onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {"SignOut"}
                        </Button>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >

    )
}