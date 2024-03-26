import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React,{useState} from "react";
import { Grid } from "@mui/material";
import { Dialog, DialogTitle } from '@mui/material';
import examData from "../utlis/examData"; // Importing examData from its file


export default function PreventiveExams() {
  const [displayedComponent, setDisplayedComponent] = useState("");
  const [openDialog, setOpenDialog] = useState(false); // Define openDialog state variable

  console.log(examData);

  
  const toggleComponent = (component, label) => {
    // Implement the logic to toggle components
  };

  const handleScheduleClick = () => {
    // Update displayedComponent state
    setDisplayedComponent("Schedule");
    toggleComponent("Schedule", "Schedule");
    setOpenDialog(true); // Open the dialog
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Close the dialog
  };

  return (
    <Container maxWidth="100%">
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          pl: 3,
          pr: 2,
          pb: 2,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mt: 2, pt: 2, pb: 2 }}
          >
            Your Free Preventive Exam
          </Typography>
        </Box>
        <Divider sx={{ mb: 1 }} />
        {examData.map((data, index) => (
          <Box
            key={index}
            sx={{
              mt: 2,
              pt: 1,
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Box display="flex">
                  <Typography marginLeft={0} fontWeight="bold" variant="h6">
                    {data.title}
                  </Typography>
                </Box>

                <Box display="flex" sx={{ margin: "5px 0px" }}>
                  <Typography>Exam eligibility:</Typography>
                  <Typography marginLeft={1} fontWeight="bold">
                    {data.Exam_eligibility}
                  </Typography>
                </Box>
                <Box display="flex" sx={{ margin: "5px 0px" }}>
                  <Typography>Current Status:</Typography>
                  <Typography marginLeft={1} fontWeight="bold">
                    {data.Current_Status}
                  </Typography>
                </Box>
                {data.link && (
                  <Box display="flex" sx={{ margin: "5px 0px" }}>
                    <Typography>Learn more about {data.type}:</Typography>
                    <Typography
                      marginLeft={1}
                      fontWeight="bold"
                      sx={{ color: "#7338ac" }}
                    >
                      {data.link}
                    </Typography>
                  </Box>
                )}
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleScheduleClick} // Attach the onClick event to the function
                  sx={{
                    borderRadius: "50px",
                    border: "2px solid #7338ac",
                    mt: { md: -9, sm: 0 },
                    textTransform: "none",
                  }}
                >
                  Schedule
                </Button>
              </Grid>
            </Grid>
            <Dialog
                onClose={handleDialogClose}
                open={openDialog}
                justifyContent="center"
                alignItems="center"
      >
        <DialogTitle sx={{ textAlign: "center",fontWeight:"bold" }}>Schedule Exam</DialogTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
          sx={{
            p: 2,
            height: 250,
            width: 320,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between"
          }}>
          <Box
            component="img"
            sx={{
              marginTop:-2,
              
              height: 90,
              marginLeft:10,
              marginRight:10
            }}
            alt="Schedule Exam"
            src="https://www.thewmch.com/wp-content/uploads/2023/02/female-doctor-using-her-digital-tablet-free-vector.jpg"
          />
          <Grid container>
            
            <div style={{display:"flex",gap:"5px"}}>
            <Grid item sx={{marginBottom:1}}>
              <Typography>Lab:</Typography>
            </Grid>
            <Grid item >
              <Typography sx={{fontWeight:"bold"}}>Any Lab Name</Typography>
            </Grid>
            </div>

            <div style={{display:"flex",gap:"5px"}}>
            <Grid item sx={{marginBottom:1}}>
              <Typography>Phone Number:</Typography>
            </Grid>
            <Grid item >
              <Typography sx={{fontWeight:"bold"}}>+(012) 345 6789</Typography>
            </Grid>
            </div>

            <div style={{display:"flex",gap:"5px"}}>
            <Grid item sx={{marginBottom:1}}>
              <Typography>Email:</Typography>
            </Grid>
            <Grid item >
              <Typography sx={{fontWeight:"bold"}}>example@email.com</Typography>
            </Grid>
            </div>

            <div style={{display:"flex",gap:"5px"}}>
            <Grid item sx={{marginBottom:1,}}>
              <Typography >Business Hours:</Typography>
            </Grid>
            <Grid item >
              <Typography sx={{fontWeight:"bold"}}>8:00 AM to 2:00 PM</Typography>
            </Grid>
            </div>
          
          </Grid>
          </Box>

          <Box
          sx={{marginBottom:"50px"}}>
          <Button
            variant="outlined"
            sx={{
              mb:"10",
              
              backgroundColor: "#7338ac",
              color: "white",
              borderRadius: "16px/50%",
              ":hover": {
                backgroundColor: "#b262fe",
              },
            }}
            onClick={handleDialogClose}
          >
           Call to Schedule
          </Button>
        </Box>
        </Box>
      </Dialog>
            <Divider sx={{ mt: 2 }} />
          </Box>
          
        ))}
      </Box>
    </Container>
  );
}
