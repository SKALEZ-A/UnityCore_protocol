import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  DashboardIcon,
  MarketIcon,
  WhitepaperIcon,
  MenuIcon,
} from "@CustomIcon/BottomNavigationicons";

const theme = createTheme({
  palette: {
    primary: {
      main: "#651BD0", // Set the primary color to purple (#9c27b0)
    },
  },
});

export default function UseBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="fixed-bottom flex w-screen">
        <Box sx={{ width: 600 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Dashboard"
              icon={<DashboardIcon />}
            />
            <BottomNavigationAction label="Market" icon={<MarketIcon />} />
            <BottomNavigationAction
              label="Whitepaper"
              icon={<WhitepaperIcon />}
            />
            <BottomNavigationAction icon={<MenuIcon />} />
          </BottomNavigation>
        </Box>
      </div>
    </ThemeProvider>
  );
}
