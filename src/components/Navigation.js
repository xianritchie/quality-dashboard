import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import { useStyles } from "../styles";
import List from '@material-ui/core/List';
import MenuItem from './MenuItem';
import routes from '../routes';

// @material-ui
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
//assets
import Logo from '../assets/PEPsense_logo_FINAL_color.png';
import clsx from 'clsx'
import { useMediaQuery, useTheme } from '@material-ui/core';

const Navigation = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const toggleNavigation = () => {
        setOpen(!open);
    };

    const closeNavigation = () => {
        if (matches) {
            setOpen(false);
        }
    };

    return (
        <div >
            <Drawer classes={{paper: clsx(classes.navigationDrawer, !open && classes.navigationDrawerCollapse)}} variant={matches ? "temporary" : "permanent"} open={open}>
                <div className={clsx(classes.navigationToolbar, !open && classes.navigationToolbarCollapse)}>
                    <IconButton onClick={toggleNavigation}>
                        {open ? <ChevronLeftIcon /> : <MenuIcon />}

                    </IconButton>
                </div>
                <div className={classes.navigationLogoContainer}><img className={classes.navigationLogo} src={Logo} alt="Hivebox Logo" /></div>
                <List className={classes.navigationList}>
                    {routes.map((route, index) => {
                        return (
                            <React.Fragment key={index}>
                            {route.path === "/signout" && <div className={classes.navigationSpacer}></div>}
                            <MenuItem label={route.label} icon={route.icon} activeIcon={route.activeIcon} path={route.path} onClick={closeNavigation} />
                            </React.Fragment>
                        );
                    } )} 
                    
                </List>
            </Drawer>
        </div>
    )
}

export default Navigation
