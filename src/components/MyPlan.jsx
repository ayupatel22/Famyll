import React from "react";
import { Container,Typography,Button,Box,Grid,Divider,Dialog,DialogTitle } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useState } from "react";
import practitionersData from "../utlis/practitionerData";
import CircleIcon from "@mui/icons-material/Circle";
import  memberCard  from "../Assets/membershipCard.png";
import PractitionerListItem from "./PractitionerListItem";
const formatDate = (date) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const MyPlan = ({ toggleComponent, setDisplayedComponent }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = (value) => {
    setOpenDialog(false);
  };
  const handleClick = () => {
    // Update displayedComponent state
    setDisplayedComponent("Plan Details");
    toggleComponent("PlanDetails", "Plan Details");
  };
  const handleMakeClaimClick = () => {
    // Update displayedComponent state
    setDisplayedComponent("MakeClaim");
    toggleComponent("MakeClaim", "Make a Claim");
  };
  const currentDate = new Date();

  return (
    <Container maxWidth="100%">
      <Box marginBottom={2}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Welcome John Smith 
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <DateRangeIcon sx={{ marginRight: "5px", marginBottom: "3px" }} />
              {`${formatDate(currentDate)}`}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              size="large"
              onClick={handleClick}
              sx={{
                border: "1px solid #7338ac",
                borderRadius: "50px",
                marginRight: "10px",
                textTransform: "none",
              }}
            >
              Plan Details
            </Button>
            <Button
              onClick={handleDialogOpen}
              color="secondary"
              size="large"
              sx={{
                border: "1px solid #7338ac",
                borderRadius: "50px",
                backgroundColor: "#7338ac",
                color: "white",
                textTransform: "none",

                ":hover": {
                  backgroundColor: "#b262fe",
                },
              }}
            >
              Membership Card
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box backgroundColor="white" padding={2} borderRadius={2}>
        <Grid
          container justifyContent="space-between" alignItems="center" mb={2}>
          <Grid item>
            <Typography variant="h4" fontWeight="bold">
              My Plan
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={handleMakeClaimClick}
              color="secondary"
              size="large"
              sx={{
                borderRadius: "50px",
                marginRight: "10px",
                backgroundColor: "#ebf3f7",
                color: "black",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              {" "}
              Make Claim
            </Button>
          </Grid>
        </Grid>
        <Divider />
        <Box
          borderRadius={2}
          sx={{
            mt: "10px",
            p: "20px",
            backgroundColor: "#f5f4f9",
            mb: 3,
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Basic Plan
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                sx={{
                  borderRadius: "50px",
                  backgroundColor: "#dff3e2",
                  color: "green",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  padding: "8px 16px", // Adjust padding as needed
                }}
              >
                <CircleIcon style={{ fontSize: "1rem", marginRight: "6px" }} />{" "}
                {/* Adjust margin as needed */}
                Active
              </Typography>
            </Grid>
          </Grid>
          <Box display="flex" mb={1}>
            <Box>
              <Typography>Member Number:</Typography>
            </Box>
            <Box ml={1}>
              <Typography fontWeight="bold" marginLeft={1}>
                #FMLI000M
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Box>
              <Typography>Plan Owner:</Typography>
            </Box>
            <Box ml={1}>
              <Typography fontWeight="bold" marginLeft={6}>
                ANONYMOUS
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>Service List</Typography>
          <Divider sx={{ mt: 3, mb: 3 }} />
          {practitionersData.map((practitioner, index) => (
            <PractitionerListItem
              key={index}
              practitioner={practitioner}
              toggleComponent={toggleComponent}
              setDisplayedComponent={setDisplayedComponent}
            />
          ))}
        </Box>
      </Box>
      <Dialog
        onClose={handleDialogClose}
        open={openDialog}
        justifyContent="center"
        alignItems="center"
      >
        <DialogTitle sx={{ textAlign: "center" }}>Membership Card</DialogTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              p: 2,
              height: 340,
              width: 500,
            }}
            alt="Membership Card"
            src={memberCard}
          />
          <Button
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: "#7338ac",
              color: "white",
              borderRadius: "16px/50%",
              ":hover": {
                backgroundColor: "#b262fe",
              },
            }}s
          >
            Download Membership Card
          </Button>
        </Box>
      </Dialog>
    </Container>
  );
};

export default MyPlan;