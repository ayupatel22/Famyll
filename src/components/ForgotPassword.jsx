import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import  Photo  from "../Assets/image.jpg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function ForgotPassword() {
  const [redirect, setRedirect] = React.useState(false);
  const [timer, setTimer] = React.useState(30); // Initial timer value
  React.useEffect(() => {
    // Function to decrement timer every second
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(countdown);
  }, []);

  React.useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        window.location.href = "/reset-password";
      }, 1000); // Redirect after 1 second
    }
  }, [redirect]);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const InputProps = {
    style: {
      borderRadius: "50px",
    },
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" bgcolor="white" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          mx={1}
          mb={1}
          mt={1}
          sm={0}
          md={5}
          sx={{
            backgroundImage: `url(${Photo})`,
            borderRadius: "20px",
            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          square
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          boxShadow="none"
        >
          <Box
            width="428px"
            height="450px"
            padding={4}
            pt={2}
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            sx={{
              marginTop: "64px",
              marginBottom: "15px",
              marginLeft: "90px",
              marginRight: "56px",
              display: "flex",
              flexDirection: "column",
              //alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="text.secondary"
              fontSize={16}
            >
              <Link
                to="/SignIn"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ChevronLeftIcon sx={{ marginRight: 1 }} />
                Back
              </Link>
            </Typography>
            <Typography component="h1" variant="h4" my={2} fontWeight="bold">
              Verify OTP
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              color="text.secondary"
              fontSize={16}
            >
              Please enter the OTP that we have sent to exmaple@email.com for
              the verification.
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit((data, e) => {
                e.preventDefault();
                setRedirect(true);
                console.log(data);
              })}
              sx={{ mt: 1 }}
            >
              <Typography
                marginTop={2}
                marginBottom={1}
                mx={1}
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
              >
                OTP
              </Typography>
              <TextField
                InputProps={InputProps}
                required
                fullWidth
                id="mem_number"
                label="Enter OTP Here"
                {...register("otp", {
                  required: "This is required",
                  minLength: {
                    value: 6,
                    message: "Enter 6 Digit OTP",
                  },
                  maxLength: {
                    value: 6,
                    message: "Enter 6 Digit OTP",
                  },
                })}
                autoFocus
              />
              <Typography
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
                sx={{
                  ml: "10px",
                  color: "red",
                }}
              >
                {" "}
                {errors.otp?.message}
              </Typography>

              <Box
                sx={{
                  mt: "5px",
                  display: "flex",
                  justifyContent: "right",
                  width: "100%",
                }}
              >
                {timer > 0 ? (
                  <Typography align="right" variant="h6" fontSize={14} mt={1}>
                    Resend OTP in {timer} Seconds
                  </Typography>
                ) : (
                  <Button
                    startIcon={<RefreshIcon />}
                    sx={{ mr: "10px" }}
                    size="small"
                    variant="contained"
                    onClick={() => {
                      setTimer(30); // Reset timer on click
                      // Additional logic for resending otp
                    }}
                  >
                    Resend OTP
                  </Button>
                )}
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  ...InputProps.style,
                  mt: 3,
                  mb: 2,
                  height: "50px",
                  backgroundColor: "#7338ac",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
