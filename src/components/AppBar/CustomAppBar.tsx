import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppLogo from "../../assets/icons/AppLogo";

function CustomAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFF",
        "& .MuiContainer-root": {
          padding: "0px",
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#FFF",
          "& .MuiSvgIcon-root": {
            fontSize: "64px",
          },
        }}
      >
        <Toolbar disableGutters>
          <AppLogo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: "medium",
              fontSize: "24px",
              lineHeight: "26px",
              letterSpacing: "0.46px",
              textAlign: "left",
              color: "#262626",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            USER Feedback
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomAppBar;
