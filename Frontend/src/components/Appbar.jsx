import { AppBar, Box, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../assets/logo.png";

export default function Appbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255,255,255,1.0)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            width: "5vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="KAN E-Book LOGO"
            sx={{
              height: "10%",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
