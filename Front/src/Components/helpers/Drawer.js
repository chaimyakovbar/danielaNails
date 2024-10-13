import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  ViewHeadline,
  Home,
  Work,
  Info,
  Phone,
  Feedback,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const DrawerNavBar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "בית", link: "/", icon: <Home /> },
          { text: "עבודות", link: "/shop", icon: <Work /> },
          { text: "עלי", link: "/about", icon: <Info /> },
          { text: "צרי קשר", link: "/contact", icon: <Phone /> },
          { text: "לפרגן", link: "/feedback", icon: <Feedback /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              duration={500}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button sx={{ color: "gray" }} onClick={toggleDrawer("right", true)}>
        <ViewHeadline />
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
};

export default DrawerNavBar;
