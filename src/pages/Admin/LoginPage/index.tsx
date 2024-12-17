import React, { useEffect } from "react";
import { auth, provider } from "../../../config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/Auth/useAuth";
import { Box, Button, Paper, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const allowedEmails = [
  "mohammad.mans2002@gmail.com",
];

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser && allowedEmails.includes(currentUser.email!)) {
      navigate("/admin");
    }
  }, [currentUser, navigate]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;

      if (allowedEmails.includes(email!)) {
        navigate("/admin");
      } else {
        alert("Unauthorized email.");
        await auth.signOut();
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <Box
      height="100dvh"
      bgcolor="primary.main"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper
        elevation={21}
        sx={{
          maxWidth: { xxs: "300px", xs: "400px", sm: "500px" },
          width: "100%",
          textAlign: "center",
          padding: 4,
        }}
      >
        <Typography
          variant="h2"
          fontFamily="Arial Rounded MT Bold"
          marginBottom={4}
          color="primary.main"
        >
          Admin Login
        </Typography>

        <Button
          variant="contained"
          onClick={handleLogin}
          endIcon={<GoogleIcon sx={{ height: "32px", width: "32px" }} />}
          sx={{
            paddingX: { xxs: 1, xs: 2 },
            paddingY: { xxs: 2, xs: 2 },
            bgcolor: "secondary.main",
            gap: { xxs: 1, xs: 2 },
            fontFamily: "Arial Rounded MT Bold",
            alignItems: "center",
            lineHeight: 1,
            fontSize: { xxs: "0.9rem", xs: "1.1rem" },
          }}
        >
          continue with google
        </Button>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
