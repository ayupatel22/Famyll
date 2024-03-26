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
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const InputProps = {
    style: {
      borderRadius: "50px",
    },
  };
  const password = watch("password", "");
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
            height="470px"
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
                  marginTop: "20px",

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
              Reset Password
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              color="text.secondary"
              fontSize={16}
            >
              Kindly enter your new password.
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit((data, e) => {
                e.preventDefault();

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
              ></Typography>
              <TextField
                InputProps={InputProps}
                required
                fullWidth
                autoFocus
                type="password"
                id="password"
                label="New Password"
                {...register("password", {
                  required: "This is required",
                  minLength: {
                    value: 6,
                    message: "Enter atleast 6 characters",
                  },
                })}
              />{" "}
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
                {errors.password?.message}
              </Typography>
              <Typography
                marginTop={2}
                marginBottom={1}
                mx={1}
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
              ></Typography>
              <TextField
                InputProps={InputProps}
                required
                fullWidth
                type="password"
                id="confirmpassword"
                label="Confirm Password"
                {...register("confirmpassword", {
                  required: "This is required",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
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
                {errors.confirmpassword?.message}
              </Typography>
              <Box
                sx={{
                  mt: "5px",
                  display: "flex",
                  justifyContent: "right",
                  width: "100%",
                }}
              ></Box>
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
