import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Atoms/Logo";
import { FormControl, MenuItem, Select } from "@mui/material";

function Navbar() {
  return (
    <div className="md:hidden w-full flex items-center justify-between px-4 absolute">
      <Logo isNav={true} />
      <FormControl variant="standard">
        <Select
          className="text-primary/60 hover:text-primary cursor-pointer duration-500 transition-all"
          IconComponent={MenuIcon}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={12}
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Navbar;
