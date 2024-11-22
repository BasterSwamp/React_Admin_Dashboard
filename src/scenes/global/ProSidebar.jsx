import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      component={<Link to={to} />}
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export default function ProSidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  useEffect(() => {
    const savedSelected = localStorage.getItem("selectedTab");
    if (savedSelected) {
      setSelected(savedSelected);
    }
  }, []);

  const handleSetSelected = (title) => {
    setSelected(title);
    localStorage.setItem("selectedTab", title);
  };

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
          minHeight: "100vh",
        },
        "& .ps-menu-button": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
          background: `transparent !important`,
        },
        "& .ps-menu-button.ps-active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? <i className="fa-solid fa-bars"></i> : undefined
            }
            style={{
              margin: "10px 0 20px",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Admin Panel
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <i className="fa-solid fa-bars-staggered"></i>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Kerim Balaban
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Company Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<i className="fa-solid fa-house"></i>}
              selected={selected}
              setSelected={handleSetSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<i className="fa-solid fa-people-group"></i>}
              selected={selected}
              setSelected={handleSetSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<i className="fa-solid fa-address-book"></i>}
              selected={selected}
              setSelected={handleSetSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<i className="fa-solid fa-chart-column"></i>}
              selected={selected}
              setSelected={handleSetSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<i className="fa-solid fa-chart-pie"></i>}
              selected={selected}
              setSelected={handleSetSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<i className="fa-solid fa-chart-line"></i>}
              selected={selected}
              setSelected={handleSetSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<i className="fa-solid fa-user"></i>}
              selected={selected}
              setSelected={handleSetSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<i className="fa-regular fa-calendar-days"></i>}
              selected={selected}
              setSelected={handleSetSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<i className="fa-regular fa-circle-question"></i>}
              selected={selected}
              setSelected={handleSetSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}
