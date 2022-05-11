import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Divider from '@mui/material/Divider';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [menuVis, setMenuVis] = useState(false);

  const list = () => (
    <>
      <List className={styles.drawerTopBar}>
        <ListItem className={styles.drawerTopBarItem}>
          <ListItemText className={styles.drawerTopBarText} disableTypography primary="Menu" />
        </ListItem>
      </List>
      <Divider/>
      <List className={styles.drawerItems}>
        <Link href="/home-page">
          <ListItem className={styles.drawerItem} button>
            <ListItemText className={styles.drawerItemText} disableTypography primary="Upload" />
          </ListItem>
        </Link>
        <Link href="/edit">
          <ListItem className={styles.drawerItem} button>
            <ListItemText className={styles.drawerItemText} disableTypography primary="Edit" />
          </ListItem>
        </Link>
        <Link href="/analysis">
          <ListItem className={styles.drawerItem} button>
            <ListItemText className={styles.drawerItemText} disableTypography primary="Analyze " />
          </ListItem>
        </Link>
        <Link href="/practice">
          <ListItem className={styles.drawerItem} button>
            <ListItemText className={styles.drawerItemText} disableTypography primary="Practice" />
          </ListItem>
        </Link>
      </List>
    </>
  );

  return (
    <div className={styles.header}>
      <FiMenu className={styles.menuIcon} onClick={() => setMenuVis(true)} />
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#F7F7F7"
          }
        }} anchor="left" open={menuVis} onClose={() => setMenuVis(false)}>
          {list()}
      </Drawer>
      <Link href="/home-page">
        <h1 className={styles.title}>SCRIPT.LY</h1>
      </Link>
    </div>
  );
};

export default Header;
