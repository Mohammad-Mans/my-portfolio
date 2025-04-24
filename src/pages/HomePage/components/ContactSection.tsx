import React, { useState } from "react";
import { TextField, Button, Box, Alert, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Lottie from "lottie-react";
import MessageAnimation from "../../../assets/lotties/Message.json";
import axios from "axios";

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.bgColor.light,
    overflow: "none",
    borderRadius: "16px",
  },
  "& fieldset": {
    borderRadius: "16px",
    paddingLeft: theme.spacing(1.5),
  },
  "& label": { paddingLeft: theme.spacing(1) },
}));

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

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
    }
  };

  return (
    <Box id="contact" display="flex" py={4} justifyContent="center">
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
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
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
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            sx={{
              border: (theme) => `1px solid ${theme.palette.primary.main}`,
              borderRadius: "30px",
              paddingY: (theme) => theme.spacing(1.5),
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
      <Box display="flex" flex={1}>
        <Lottie
          animationData={MessageAnimation}
          loop={true}
          style={{ height: "auto", width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default ContactSection;
