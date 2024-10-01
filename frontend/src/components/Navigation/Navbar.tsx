import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Atoms/Logo";
import { FormControl, MenuItem, Select } from "@mui/material";
import { Link, sideBarButtons } from "./utils";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="md:hidden w-full flex items-center justify-between px-4 bg-primary fixed z-50 border border-primary/10 border-x-transparent border-t-transparent border-b-2">
      <Logo isNav={true} />
      <FormControl variant="standard">
        <Select
          className="text-primary/60 hover:text-primary cursor-pointer duration-500 transition-all"
          IconComponent={MenuIcon}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={12}
          label="Age"
          inputProps={{ disableUnderline: true }}
        >
          {sideBarButtons.map((route: Link, index: number) => {
            return (
              <MenuItem
                key={index}
                value={route.path}
                onClick={() => handleClick(route.path)}
              >
                {route.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default Navbar;
