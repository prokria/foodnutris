import { useState, useEffect } from "react";
import { Toolbar, IconButton, Typography, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import categories from "../Posts/categories.json";

type MenuType = {
  title: string;
  url: string;
};
export default function Header() {
  const [menus, setMenus] = useState<MenuType[]>([]);

  useEffect(() => {
    const allMenus: MenuType[] = [{ title: "Home", url: "/" }];
    if (categories) {
      categories.forEach((cat: any) =>
        allMenus.push({ title: cat.name, url: `/category/${cat.slug}` })
      );
    }
    setMenus(allMenus);
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
          <img src="/logo.png" alt="foodnutris" width="200" />
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
        {menus.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{
              p: 1,
              flexShrink: 0,
              textDecoration: "none",
              fontWeight: 600,
              "&:hover": {
                color: "#40407a",
                backgroundColor: "#FFF",
              },
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}
