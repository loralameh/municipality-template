import React from "react";
import PropTypes from "prop-types";

import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const SocialButtons = (props) => {
  return (
    <MKBox display="flex" alignItems="center" mt={3}>
      {props.whatsAppLink && (
        <MKTypography
          key={props.whatsAppLink}
          component="a"
          href={props.whatsAppLink}
          target="_blank"
          rel="noreferrer"
          variant="h5"
          color="dark"
          opacity={0.8}
          mr={2.5}
        >
          <WhatsAppIcon />
        </MKTypography>
      )}
      {props.fbLink && (
        <MKTypography
          key={props.fbLink}
          component="a"
          href={props.fbLink}
          target="_blank"
          rel="noreferrer"
          variant="h5"
          color="dark"
          opacity={0.8}
          mr={2.5}
        >
          <FacebookIcon />
        </MKTypography>
      )}
      {props.instaLink && (
        <MKTypography
          key={props.instaLink}
          component="a"
          href={props.instaLink}
          target="_blank"
          rel="noreferrer"
          variant="h5"
          color="dark"
          opacity={0.8}
          mr={2.5}
        >
          <InstagramIcon />
        </MKTypography>
      )}

      {props.twitterLink && (
        <MKTypography
          key={props.twitterLink}
          component="a"
          href={props.twitterLink}
          target="_blank"
          rel="noreferrer"
          variant="h5"
          color="dark"
          opacity={0.8}
          mr={2.5}
        >
          <TwitterIcon />
        </MKTypography>
      )}

      {props.githubLink && (
        <MKTypography
          key={props.githubLink}
          component="a"
          href={props.githubLink}
          target="_blank"
          rel="noreferrer"
          variant="h5"
          color="dark"
          opacity={0.8}
          mr={2.5}
        >
          <GitHubIcon />
        </MKTypography>
      )}

      {props.linkedinLink && (
        <MKTypography
          key={props.linkedinLink}
          component="a"
          href={props.linkedinLink}
          target="_blank"
          rel="noreferrer"
          variant="h5"
          color="dark"
          opacity={0.8}
          mr={2.5}
        >
          <LinkedInIcon />
        </MKTypography>
      )}
      {props.website && (
        <MKTypography
          key={props.website}
          component="a"
          href={props.website}
          target="_blank"
          rel="noreferrer"
          variant="h5"
          color="dark"
          opacity={0.8}
          mr={2.5}
        >
          <LanguageIcon />
        </MKTypography>
      )}
    </MKBox>
  );
};

SocialButtons.propTypes = {
  githubLink: PropTypes.string,
  fbLink: PropTypes.string,
  instaLink: PropTypes.string,
  twitterLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  website: PropTypes.string,
  whatsAppLink: PropTypes.string,
};

export default SocialButtons;
