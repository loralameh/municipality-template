import PropTypes from "prop-types";

// @mui material components
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function ConfirmationModal(props) {
  const { closeModal, isOpen, handleSubmit, text, title } = props;

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
            <MKTypography variant="h5"> {title} </MKTypography>
            <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={closeModal} />
          </MKBox>
          <Divider sx={{ my: 0 }} />
          <MKBox p={2}>
            <MKTypography> {text} </MKTypography>
          </MKBox>
          <Divider sx={{ my: 0 }} />
          <MKBox display="flex" justifyContent="flex-start" gap={1} p={1.5}>
            <MKButton variant="gradient" color="info" onClick={handleSubmit}>
              حفظ
            </MKButton>
            <MKButton variant="gradient" color="secondary" onClick={closeModal}>
              إغلاق
            </MKButton>
          </MKBox>
        </MKBox>
      </Slide>
    </Modal>
  );
}

export default ConfirmationModal;

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
};
