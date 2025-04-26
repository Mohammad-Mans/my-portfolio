import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Alert,
  styled,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Lottie from "lottie-react";
import MessageAnimation from "../../../../assets/lotties/Message.json";
import axios from "axios";
import SectionTitle from "../../../../components/common/SectionTitle";

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.bgColor.light,
    overflow: "none",
    borderRadius: "8px",
  },
  "& fieldset": {
    borderRadius: "8px",
    paddingLeft: theme.spacing(1.5),
  },
  "& label": { paddingLeft: theme.spacing(1) },
}));

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://my-portfolio-backend-rrhz.onrender.com/send-email",
        {
          email,
          message,
        }
      );

      if (response.status === 200) {
        setSnackbar({
          open: true,
          message: "Email sent successfully!",
          severity: "success",
        });
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.log(err);
      setSnackbar({
        open: true,
        message: "Failed to send email. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        id="contact"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={4}
      >
        <SectionTitle title="Contact" />

        <Box display="flex" justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            flex={2}
            justifyContent="center"
          >
            <Box component="form" onSubmit={handleSubmit}>
              <StyledTextField
                fullWidth
                label="Your Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <StyledTextField
                fullWidth
                label="Your Message"
                multiline
                minRows={6}
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                endIcon={!loading && <SendIcon />}
                disabled={loading}
                sx={{
                  border: (theme) => `1px solid ${theme.palette.primary.main}`,
                  borderRadius: "30px",
                  paddingY: (theme) => theme.spacing(1.5),
                  minWidth: "150px",
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  "Send Message"
                )}
              </Button>
            </Box>
          </Box>
          <Box
            display={{ xxs: "none", md: "flex" }}
            flex={1}
            ml={4}
            maxHeight={400}
          >
            <Lottie
              animationData={MessageAnimation}
              loop={true}
              style={{ height: "auto", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={snackbar?.open || false}
        autoHideDuration={4000}
        onClose={() => setSnackbar(null)}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          onClose={() => setSnackbar(null)}
          severity={snackbar?.severity}
          sx={{ width: "100%" }}
        >
          {snackbar?.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactSection;
