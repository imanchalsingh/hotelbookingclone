import { useState } from "react";
import {
  Drawer,
  Box,
  IconButton,
  ListItem,
  Typography,
  ListItemButton,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import Divider from "@mui/material/Divider";
import LoginIcon from "@mui/icons-material/Login";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Logo from "./logopicture.png";
import CancelIcon from "@mui/icons-material/Cancel";
import Dialog from "@mui/material/Dialog";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const open = () => {
    setOpenDialog(true);
  };
  const close = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <div
        style={{ width: "100%", backgroundColor: "#e6e6e6", height: "60px" }}
      >
        <IconButton
          style={{ color: "#000", marginLeft: "7px" }}
          size="large"
          edge="start"
          aria-label="logo"
          onClick={() => {
            setIsDrawerOpen(true);
          }}
        >
          <MenuIcon sx={{ fontSize: "30px" }} />
        </IconButton>
        <Drawer anchor="left" open={isDrawerOpen}>
          <Box p={2} width="250px" textAlign="center" role="presentation">
            <IconButton
              style={{ marginLeft: "90%" }}
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <Typography sx={{textAlign:"left"}}>
              <img style={{ width: "65%" }} src={Logo} alt="logopic" />
            </Typography>
            <ListItemButton>
              <ListItem component="div">
                <HomeIcon sx={{ marginRight: "15px" }} />
                Home
              </ListItem>
            </ListItemButton>
            <ListItemButton>
              <ListItem component="div">
                <RecentActorsIcon sx={{ marginRight: "15px" }} />
                Recent
              </ListItem>
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItem component="div">
                <PersonIcon sx={{ marginRight: "15px" }} /> Account
              </ListItem>
            </ListItemButton>
            <ListItemButton>
              <ListItem component="div">
                <SettingsIcon sx={{ marginRight: "15px" }} /> Settings
              </ListItem>
            </ListItemButton>
            <ListItemButton onClick={open}>
              <ListItem component="div">
                <LoginIcon sx={{ marginRight: "15px" }} />
                Login
              </ListItem>
            </ListItemButton>
          </Box>
        </Drawer>
        <img style={{ width: "15%" }} src={Logo} alt="logo" />
      </div>
      <Dialog open={openDialog}>
        <ListItem
          component="div"
          onClick={close}
          style={{ display: "flex", justifyContent: "right" }}
        >
          <CancelIcon />
        </ListItem>

        <div
          style={{ padding: "40px", display: "flex", flexDirection: "column" }}
        >
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-20px",
            }}
          >
            <img style={{ width: "40%" }} src={Logo} alt="logopic" />
          </Typography>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              style={{ marginTop: "20px" }}
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <button
              style={{
                textAlign: "center",
                borderRadius: "50px",
                width: "25%",
                height: "40px",
                marginTop: "20px",
                boxShadow: "0px 0px 5px 0px gray",
                backgroundColor: "#4286BD",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Login
            </button>
          </form>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Don't have an account?<a href="/">sign in</a>
          </p>
        </div>
      </Dialog>
    </>
  );
}
