import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { FaGlobeAsia, FaAngleDown, FaAngleUp } from "react-icons/fa";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Dropdown() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [customSize, setCustomSize] = useState({});
  const { t } = useTranslation();

  function handleDir() {
    const dir = document.documentElement.dir;
    if (dir === "ltr") {
      document.documentElement.dir = "rtl";
      Cookies.set("dir", "rtl");
      Cookies.set("lang", "ar");
      setCustomSize({ fontSize: "22px" });
    } else {
      document.documentElement.dir = "ltr";
      Cookies.remove("dir", "rtl");
      Cookies.remove("lang", "ar");
      setCustomSize({ fontSize: "15px" });
    }
    // console.log(dir);
  }

  const closeMenu = () => setIsMenuOpen(false);
  const langs = [
    {
      code: "en",
      name: "English",
      countru_code: "gb",
      dir: "ltr",
    },
    {
      code: "ar",
      name: "العربية",
      countru_code: "sa",
      dir: "rtl",
    },
  ];

  useEffect(() => {
    if (Cookies.get("dir")) {
      document.documentElement.dir = "rtl";
      setCustomSize({ fontSize: "22px" });
    }
  }, []);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto text-white "
        >
          <FaGlobeAsia size={25} className="text-white" />
          <span className="px-2 font-bold" style={customSize}>
            {t("home:language")}
          </span>
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {langs.map(({ code, name, countru_code, dir }) => {
          return (
            <Link
              key={code}
              href="/"
              locale={code}
              onClick={() => {
                if (document.documentElement.dir !== dir) {
                  handleDir();
                }
              }}
            >
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded `}
              >
                <Typography as="span" variant="small" className="font-normal">
                  <span className={`fi fi-${countru_code} mx-2`}></span> {name}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
}
