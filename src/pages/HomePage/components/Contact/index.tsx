import React, { useState } from "react";
import { TextField, Button, Box, Alert, styled, CircularProgress } from "@mui/material";
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
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
        setSuccess("Email sent successfully!");
        setError(null);
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      setError("Failed to send email. Please try again.");
      console.log(err);
      setSuccess(null);
    } finally {
      setLoading(false);
    }
  };

  return (
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
            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {success}
              </Alert>
            )}
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

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
  );
};

export default ContactSection;
