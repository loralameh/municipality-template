import PropTypes from "prop-types";

// @mui material components
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import { Container } from "@mui/material";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Slideshow from "examples/Slideshow";
import SocialButtons from "examples/SocialButtons";

function ViewServiceModal(props) {
  const { closeModal, isOpen, data } = props;

  return (
    <Modal open={isOpen} onClose={closeModal} sx={{ display: "grid", placeItems: "center" }}>
      <Slide direction="down" in={isOpen} timeout={500}>
        <MKBox
          position="relative"
          width="500px"
          display="flex"
          flexDirection="column"
          borderRadius="xl"
          bgColor="white"
          shadow="xl"
        >
          <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
            <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={closeModal} />
          </MKBox>
          <Divider sx={{ my: 0 }} />
          <MKBox p={2}>
            {data && (
              <Container>
                {data.pictureGallery && <Slideshow images={data.pictureGallery} />}
                <MKBox lineHeight={1} my={1}>
                  <MKTypography display="block" variant="h4" fontWeight="bold" mb={0.5}>
                    {data.title}
                  </MKTypography>
                  <SocialButtons
                    githubLink={data.githubLink}
                    fbLink={data.fbLink}
                    instaLink={data.instaLink}
                    twitterLink={data.twitterLink}
                    linkedinLink={data.linkedinLink}
                    website={data.website}
                    whatsAppLink={data.whatsAppLink}
                  />

                  <MKTypography
                    variant="button"
                    fontWeight="regular"
                    lineHeight={1}
                    color="text"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <LocalPhoneIcon fontSize="small" />
                    &nbsp; {data.servicePhoneNumber}
                  </MKTypography>
                  <MKTypography
                    variant="button"
                    fontWeight="regular"
                    lineHeight={1}
                    color="text"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <LocationOnIcon fontSize="small" />
                    &nbsp; {data.location}
                  </MKTypography>

                  <MKTypography variant="body2" color="text" my={2}>
                    {data.description}
                  </MKTypography>
                </MKBox>
              </Container>
            )}
          </MKBox>
          <Divider sx={{ my: 0 }} />
          <MKBox display="flex" justifyContent="flex-start" gap={1} p={1.5}>
            <MKButton variant="gradient" color="secondary" onClick={closeModal}>
              إغلاق
            </MKButton>
          </MKBox>
        </MKBox>
      </Slide>
    </Modal>
  );
}

export default ViewServiceModal;

ViewServiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  data: PropTypes.object,
};
