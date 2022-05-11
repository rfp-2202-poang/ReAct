import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
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
    <List>
      <Link href="/home-page">
        <ListItem button>
          <ListItemText primary="Upload" />
        </ListItem>
      </Link>

      <Link href="/edit">
        <ListItem button>
          <ListItemText primary="Edit" />
        </ListItem>
      </Link>

      <Link href="/analysis">
        <ListItem button>
          <ListItemText primary="Analyze " />
        </ListItem>
      </Link>

      <Link href="/practice">
        <ListItem button>
          <ListItemText primary="Practice" />
        </ListItem>
      </Link>
    </List>
  );

  return (
    <div className={styles.header}>
      <FiMenu className={styles.menuIcon} onClick={() => setMenuVis(true)} />
      <Drawer anchor="left" open={menuVis} onClose={() => setMenuVis(false)}>
        {list()}
      </Drawer>
      <Link href="/home-page">
        <h1 className={styles.title}>SCRIPT.LY</h1>
      </Link>
    </div>
  );
};

export default Header;
