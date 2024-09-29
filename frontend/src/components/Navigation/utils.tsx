import { FaPaintBrush, FaUser } from "react-icons/fa";
import { ROUTE_BIO, ROUTE_CONTACT, ROUTE_PAINTINGS } from "../../constants";
import { IoIosInformationCircle } from "react-icons/io";

export type Link = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

export const sideBarButtons: Link[] = [
  { path: ROUTE_PAINTINGS, label: "Paintings", icon: <FaPaintBrush /> },
  { path: ROUTE_BIO, label: "About me", icon: <FaUser /> },
  { path: ROUTE_CONTACT, label: "Contact", icon: <IoIosInformationCircle /> },
];
