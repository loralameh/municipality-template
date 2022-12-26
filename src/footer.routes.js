// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "بلدية حاصبيا",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/profile.php?id=100068424518694",
    },
    {
      icon: <TwitterIcon />,
      link: "https://www.twitter.com/profile.php?id=100068424518694",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/profile.php?id=10006842451869",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
        { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
        { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      حقوق الطبع والنشر © بلدية حاصبيا {date}. جميع الحقوق محفوظة. الموقع تقدمة
      <MKTypography
        component="a"
        href="https://www.linkedin.com/in/lora-lameh"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        {"   "}لورا فريد لمع{"   "}
      </MKTypography>
      .
    </MKTypography>
  ),
};
