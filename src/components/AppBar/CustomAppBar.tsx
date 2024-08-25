import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppLogo from "../../assets/icons/AppLogo";
import RowSpaceBetween from "../../StylesComponents/RowSpaceBetween";
import BlueButton from "../../StylesComponents/BlueButton";
import GreenButton from "../../StylesComponents/GreenButton";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CustomAppBarProps {
  showActionButtons: boolean;
}

function CustomAppBar({ showActionButtons }: Readonly<CustomAppBarProps>) {
  const navigate = useNavigate();
  const handleClick = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

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
          <RowSpaceBetween sx={{ width: "100%" }}>
            <Button onClick={handleClick}>
              <Stack
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{ gap: "0px" }}
              >
                <AppLogo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
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
              </Stack>
            </Button>

            {showActionButtons && (
              <Stack
                display="flex"
                flexDirection="row"
                sx={{ gap: "33px", marginRight: "14px" }}
              >
                <BlueButton>Save</BlueButton>
                <GreenButton>Publish</GreenButton>
              </Stack>
            )}
          </RowSpaceBetween>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomAppBar;
