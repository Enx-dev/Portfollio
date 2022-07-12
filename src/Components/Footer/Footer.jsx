import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <footer className="Footer" id="FooterSection">
      <a href="https://github.com/Enx-dev">
        <GitHubIcon sx={{ color: "#DBECFF" }} />
      </a>
      <a href="mailto:enx.co21@gmail.com">
        <EmailIcon sx={{ color: "#DBECFF" }} />
      </a>
      <a href="tel:+2349096597420">
        <PermPhoneMsgIcon sx={{ color: "#DBECFF" }} />
      </a>
      <a href="https://www.linkedin.com/in/eniola-adejori-0a3091204/">
        <LinkedInIcon sx={{ color: "#DBECFF" }} />
      </a>
      <a href="">
        <WhatsAppIcon sx={{ color: "#DBECFF" }} />
      </a>
    </footer>
  );
};

export default Footer;
