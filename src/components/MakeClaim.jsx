import React from "react";
import { Box,Button,Container,Grid,MenuItem,Select,TextField,Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const MakeClaim = () => {
  const [visitType, setVisitType] = useState("");
  const handleVisitTypeChange = (event) => {
    setVisitType(event.target.value);
  };

  const [file, setFile] = React.useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Container maxWidth="100%">
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "25px",
          p: 2,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              mt: 2,
              mb: 2,
            }}
          >
            Make Claim
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 2,
            }}
          >
            Please provide the details to complete your claim process.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Typography
                marginTop={2}
                marginBottom={1}
                mx={1}
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
              >
                Enter Visit Type
              </Typography>
              <Select
                fullWidth
                sx={{
                  borderRadius: "50px",
                }}
                value={visitType}
                onChange={handleVisitTypeChange}
                displayEmpty
              >
                <MenuItem disabled value="">
                  Select Visit type
                </MenuItem>
                <MenuItem value="visitType1">Visit Type 1</MenuItem>
                <MenuItem value="visitType2">Visit Type 2</MenuItem>
                <MenuItem value="visitType3">Visit Type 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography
                marginTop={2}
                marginBottom={1}
                mx={1}
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
              >
                Enter Date of Service
              </Typography>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  inputFormat="dd/MM/yyyy"
                  renderInput={(params) => <TextField {...params} />}
                  fullWidth
                  sx={{
                    borderRadius: "50px", // Adjusted border radius value
                    "& .MuiOutlinedInput-root": {
                      // Specific selector for TextField
                      borderRadius: "50px", // Adjusted border radius value
                      //   width: { md: "600px" },
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography
                marginTop={2}
                marginBottom={1}
                mx={1}
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
              >
                Service Provider
              </Typography>
              <TextField
                fullWidth
                variant="outlined" // Add variant prop
                sx={{
                  borderRadius: "50px", // Adjusted border radius value
                  "& .MuiOutlinedInput-root": {
                    // Specific selector for TextField
                    borderRadius: "50px", // Adjusted border radius value
                  },
                }}
                placeholder="Enter Service Provider"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography
                marginTop={2}
                marginBottom={1}
                mx={1}
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
              >
                Enter Amount to Reimburse
              </Typography>
              <TextField
                type="number"
                fullWidth
                variant="outlined" // Add variant prop
                sx={{
                  borderRadius: "50px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                  },
                }}
                placeholder="Enter Amount Here"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography
                marginTop={2}
                marginBottom={1}
                mx={1}
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
              >
                MDN Wallet Number
              </Typography>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                sx={{
                  borderRadius: "50px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                  },
                }}
                placeholder="Enter MDN Wallet Number"
              />
            </Grid>

            <Grid item md={12}>
              <Typography variant="subtitle2" sx={{ ml: 2 }}>
                * In a case where we do not have a provider in our network for
                that specific service, we shall reimburse at 100%
              </Typography>
              <Grid container alignItems="center" spacing={2}>
                <Grid item md={6}>
                  <Typography
                    marginTop={2}
                    marginBottom={1}
                    mx={1}
                    component="h1"
                    variant="h6"
                    color="text.secondary"
                    fontSize={14}
                  >
                    Add Reciept
                  </Typography>
                  <Typography
                    sx={{
                      mt: 2,
                      ml: 2,
                      border: "1px dashed #b1a8ba",
                      borderRadius: "50px", // Add border radius
                      padding: "10px",
                      mb: 10,
                    }}
                  >
                    {file ? file.name : "Upload Here"}
                  </Typography>
                </Grid>
                <Grid item md={6} sx={{ mb: 10 }}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{
                      mt: 7,
                      ml: 2,
                      border: "1px solid #7338ac",
                      borderRadius: "50px",
                      backgroundColor: "#7338ac",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#b262fe",
                      },
                    }}
                  >
                    Upload file
                    <VisuallyHiddenInput type="file" onChange={handleChange} />
                  </Button>
                </Grid>
                <Grid item md={10}>
                  <Typography variant="subtitle2" sx={{ ml: 2 }}>
                    You will get 50% of amount as a reimbursement from entered
                    amount
                  </Typography>
                  <Typography sx={{ ml: 2 }}>$XXXX</Typography>
                </Grid>
                <Grid item md={2}>
                  <Button
                    size="large"
                    sx={{
                      border: "1px solid #7338ac",
                      borderRadius: "50px",
                      backgroundColor: "#7338ac",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#b262fe",
                      },
                    }}
                  >
                    Submit claim
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default MakeClaim;
