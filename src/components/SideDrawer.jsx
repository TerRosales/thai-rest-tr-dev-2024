import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CgMoreR } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";

export default function SideDrawer({ open, toggleDrawer }) {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["Hot Meals", "Star Favorites", "Deals of the Week", "News"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <CgMoreR /> : <CgMoreR />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Our Chef's", "Our Values", "Upcoming Events"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <CgMoreR /> : <CgMoreR />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open}>
        <Link className="self-center mt-4 mb-2" href="/">
          <Image
            src="/images/logo.png"
            alt="App logo"
            width={160}
            height={150}
          />
        </Link>
        <Divider />
        {DrawerList}
      </Drawer>
    </div>
  );
}
