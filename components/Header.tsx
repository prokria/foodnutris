import { useState, useEffect } from "react";
import { Toolbar, IconButton, Typography, Link as MUILink } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import axios from "axios";
import { BASEURL } from "../utilities/constants";
import Link from 'next/link'

type MenuType = {
  title: string;
  url: string;
};
export default function Header() {
  const [menus, setMenus] = useState<MenuType[]>([]);
  useEffect(() => {
    axios
      .get(`${BASEURL}categories.json`)
      .then(function (response) {
        if (response.status === 200) {
          const allMenus: MenuType[] = [{ title: "Home", url: "/" }];
          if (response.data) {
            response.data?.forEach((cat: any) =>
              allMenus.push({ title: cat.name, url: `/category/${cat.slug}` })
            );
          }
          setMenus(allMenus);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Image src="/logo.png" alt="foodnutris" width="200" height="60" />
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {menus.map((section, index: number) => (
          <Link href={section.url} key={index}>
            <MUILink
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              sx={{
                p: 1,
                flexShrink: 0,
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": {
                  color: "#40407a",
                  backgroundColor: "#FFF",
                },
                cursor: 'pointer'
              }}
            >
              {section.title}
            </MUILink>
          </Link>
        ))}
      </Toolbar>
    </>
  );
}
