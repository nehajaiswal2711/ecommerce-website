import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { keyframes } from "@mui/system";
import "./navbar.css";
import "@fontsource/montez";
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
export const textPopUpTop = keyframes` 
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #000, 0 2px 0 #000, 0 3px 0 #000, 0 4px 0 #000, 
    0 5px 0 #000, 0 6px 0 #000, 0 7px 0 #000, 0 8px 0 #000, 0 9px 0 #000;

  }
`;
function Navbar(props) {
     const { window } = props;
     const [mobileOpen, setMobileOpen] = React.useState(false);
     const navigator = useNavigate()

     const handleDrawerToggle = () => {
          setMobileOpen((prevState) => !prevState);
     };

     const handleClick = (item) => {
          console.log(item);
          if (item === "Home") {
               navigator("/")
          }
          if (item === "About") {
               navigator("/about")
          }
     }

     const drawer = (
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'start' }}>
               <Typography variant="h4" sx={{ my: 2, color: "#d1adcc", fontFamily: '"Montez", "cursive"', textAlign: "center" }}>
                    My Bags
               </Typography>
               <Divider />
               <List>
                    {navItems.map((item) => (
                         <ListItem key={item} disablePadding onClick={() => handleClick(item)} >
                              <ListItemButton sx={{ textAlign: 'center' }} >
                                   <ListItemText primary={item} />
                              </ListItemButton>
                         </ListItem>
                    ))}
               </List>
          </Box>
     );

     const container = window !== undefined ? () => window().document.body : undefined;
     return (
          <Box sx={{ display: 'flex' }}>
               <CssBaseline />
               <AppBar component="nav">
                    <Toolbar sx={{ background: "white" }}>
                         <IconButton
                              color="inherit"
                              aria-label="open drawer"
                              edge="start"
                              onClick={handleDrawerToggle}
                              sx={{ mr: 2, display: { sm: 'none' } }}
                         >
                              <MenuIcon />
                         </IconButton>
                         <Typography
                              variant="h6"
                              component="div"
                              sx={{
                                   flexGrow: 1, display: { xs: 'none', sm: 'block' }, padding: "4px",
                                   flexGrow: 1,
                                   fontSize: "3em",
                                   fontFamily: '"Montez", "cursive"',
                                   color: "#d1adcc",
                              }}
                         >
                              My Bags
                         </Typography>
                         <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                              {navItems.map((item) => (
                                   <Button key={item} sx={{ color: 'black' }} onClick={() => handleClick(item)}>
                                        {item}
                                   </Button>
                              ))}
                         </Box>
                    </Toolbar>
               </AppBar>
               <Box component="nav">
                    <Drawer
                         container={container}
                         variant="temporary"
                         open={mobileOpen}
                         onClose={handleDrawerToggle}
                         ModalProps={{
                              keepMounted: true, // Better open performance on mobile.
                         }}
                         sx={{
                              display: { xs: 'block', sm: 'none' },
                              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                         }}
                    >
                         {drawer}
                    </Drawer>
               </Box>
          </Box>
     )
}

export default Navbar