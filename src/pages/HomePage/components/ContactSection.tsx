import React, { useState } from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import Lottie from "lottie-react";
import MessageAnimation from "../../../assets/lotties/Message.json";
import axios from "axios";

// const StyledTextField = styled(TextField)(({theme})=>({

// }));

const ContactSection: React.FC = () => {
  // Form state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form submission handler
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

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
          {/* Success and Error Messages */}
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

          {/* Email Input */}
          <TextField
            fullWidth
            label="Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="filled"
            slotProps={{
                input: {
                    disableUnderline: true,
                },
            }}
            sx={{ mb: 2 }}
          />

          {/* Message Input */}
          <TextField
            fullWidth
            label="Your Message"
            multiline
            minRows={6}
            variant="filled"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            sx={{ mb: 2 }}
            slotProps={{
                input: {
                    disableUnderline: true,
                },
            }}
          />

          <Button type="submit" variant="contained" color="primary">
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
