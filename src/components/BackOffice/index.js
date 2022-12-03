import React from "react";
import PropTypes from 'prop-types';
import {
    Box,
    Drawer,
    IconButton,
    Tab,
    Tabs,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { MenuRounded } from "@mui/icons-material";
import clsx from "clsx";
import theme from "../../theme";
import ProjectContainer from "./Project/ProjectContainer";
import MessageContainer from "./Message/MessageContainer";
import logoTransparent from "../../assets/images/LOGO-2023-bleu-fondtransparent.png";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

const PREFIX = 'FAQ';

const classes = {
    root: `${PREFIX}-root`,
    drawer: `${PREFIX}-drawer`,
    content: `${PREFIX}-content`,
    tab: `${PREFIX}-tab`,
    tabTitle: `${PREFIX}-tabTitle`,
    tabClickable: `${PREFIX}-tabClickable`,
    tabLevelOne: `${PREFIX}-tabLevelOne`,
    tabLevelTwo: `${PREFIX}-tabLevelTwo`,
    tabs: `${PREFIX}-tabs`,
    panel: `${PREFIX}-panel`,
    quePermet: `${PREFIX}-quePermet`,
    up: `${PREFIX}-up`,
    titleSection: `${PREFIX}-titleSection`,
    image: `${PREFIX}-image`,
    mobileMenu: `${PREFIX}-mobileMenu`,
    drawerPaper: `${PREFIX}-drawerPaper`
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`&.${classes.root}`]: {
        backgroundColor: theme.palette.background.paper,
        display: "flex",
    },

    [`& .${classes.drawer}`]: {
        position: 'relative',
        height: '100vh',
        [theme.breakpoints.up("md")]: {
            width: menuWidth,
            flexShrink: 0,
        },
    },
    [`& .${classes.drawerPaper}`]: {
        width: menuWidth,
    },

    [`& .${classes.content}`]: {
        flexGrow: 1,
    },

    [`& .${classes.tab}`]: {
        alignItems: "flex-start",
        width: menuWidth,
        maxWidth: menuWidth,
    },

    [`& .${classes.tabTitle}`]: {
        color: theme.palette.primary.main,
        alignItems: 'center'
    },

    [`& .${classes.tabClickable}`]: {
        color: theme.palette.grey[700]
    },

    [`& .${classes.tabLevelOne}`]: {
        paddingLeft: theme.spacing(4),
    },

    [`& .${classes.tabLevelTwo}`]: {
        paddingLeft: theme.spacing(8),
    },

    [`& .${classes.tabs}`]: {
        borderRight: `2px solid ${theme.palette.divider}`,
        width: menuWidth,
        padding: theme.spacing(1),
    },

    [`& .${classes.panel}`]: {
        flexGrow: 1,
        paddingTop: theme.spacing(2),
    },

    [`& .${classes.quePermet}`]: {
        "& .MuiBox-root": {
            padding: "2px",
        },
    },

    [`& .${classes.up}`]: {
        position: "fixed",
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },

    [`& .${classes.titleSection}`]: {
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(6),
        },
        marginBottom: theme.spacing(2),
    },

    [`& .${classes.image}`]: {
        width: "100%",
    },

    [`& .${classes.mobileMenu}`]: {
        position: "fixed",
        marginTop: theme.spacing(1.5),
        marginLeft: theme.spacing(1),
        opacity: 0.8,
        zIndex: 1,
    },

    [`& .${classes.mobileMenu}:hover`]: {
        opacity: 1
    }
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const menuWidth = 250;

function IndexBackOffice() {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(1);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }


    const menu = (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            classes={{
                root: classes.tabs
            }}
            id="fixed-element"
            sx={{
                height: '100vh',
                '& .MuiTabs-flexContainer': {
                    alignItems: 'flex-start',
                    width: menuWidth-2
                },
                '& .FAQ-tabTitle.Mui-disabled': {
                    color: theme.palette.primary.main,
                    ml: 'auto',
                    mr: 'auto'
                },
                '& .MuiTab-root': {
                    justifyContent: "start",
                    minHeight: "50px"
                }
            }}
            //textColor="primary"
        >
            <Tab
                icon={<img src={logoTransparent} alt="zetty design" style={{maxWidth: '180px'}}/>}
               // label="Acceuil"
                {...a11yProps(0)}
                classes={{
                    root: classes.tabTitle
                }}
                sx={{
                    color: theme.palette.primary.main,
                    alignItems: 'center'
                }}
                disabled
            />
            <Tab
                icon={<LibraryBooksIcon />}
                iconPosition="start"
                classes={{
                    root: clsx(classes.tab, classes.tabClickable),
                }}
                label='Mes Projets'
                {...a11yProps(1)}
            />
            <Tab
                icon={<MessageIcon />}
                iconPosition="start"
                classes={{
                    root: clsx(classes.tab, classes.tabClickable),
                }}
                label="Mes Messages"
                {...a11yProps(2)}
            />
            <Tab
                icon={<LogoutIcon />}
                iconPosition="start"
                classes={{
                    root: clsx(classes.tab, classes.tabClickable),
                }}
                label="Se déconnecter"
                {...a11yProps(3)}
                onClick={logout}
            />
        </Tabs>
    );

    return (
        <Root className={classes.root}>
            <nav className={classes.drawer} id="leftColumnFixed" aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    //	container={container}
                    variant="temporary"
                    anchor={"left"}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    sx={{
                        width: menuWidth,
                        '& .MuiDrawer-paper': {
                            width: menuWidth,
                            alignItems: 'flex-start'
                        },
                        display: {xs: 'flex', md: 'none'}
                    }}
                >
                    {menu}
                </Drawer>
                <Box sx={{
                    display: {xs: 'none', md: 'flex'}
                }}>
                    {menu}
                </Box>
            </nav>
            <main className={classes.content}>
                <Box sx={{
                    display: {xs: 'flex', md: 'none'}
                }}>
                    <IconButton className={classes.mobileMenu} onClick={handleDrawerToggle} size="large">
                        <MenuRounded fontSize={"large"} />
                    </IconButton>
                </Box>
                <TabPanel value={value} index={0} className={classes.panel}>
                    WGY ?
                </TabPanel>
                <TabPanel
                    value={value}
                    index={1}
                    className={classes.panel}>
                        <ProjectContainer />
                </TabPanel>
                <TabPanel
                    value={value}
                    index={2}
                    className={classes.panel}>
                        <MessageContainer />
                </TabPanel>
            </main>
        </Root>
    );

}

export default IndexBackOffice