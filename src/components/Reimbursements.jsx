import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Container, Grid, Pagination, Divider } from "@mui/material";

const rows = [
  {
    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "Completed",
    
  },
  {
    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "In Progress",
    
  },
  {
    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "Completed",
    
  },
  {
    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "Cancelled",
  
  },
  {
    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "Completed",

  },
  {
    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "Completed",
    
  },
  // More rows...
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "#4caf50";
    case "In Progress":
      return "#ffeb3b";
    case "Cancelled":
      return "#f44336";
    default:
      return "#000"; // Default color
  }
};

// const getStatusIcon = (status) => {
//   switch (status) {
//     case "Completed":
//       return <CircleIcon />;
//       case "In Progress":
//         return <CircleIcon />;
//       case "Cancelled":
//         return <CircleIcon />;
//       default:
//         return "#000"; // Default color
//   }
// }
const Reimbursements = () => {
  return (
    <Container sx={{ background: "f5f4f9" }}>
      <Box
        sx={{
          mt: 2,
          p: 2,
          pt: 4,
          pl: 3,
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <Box
          borderRadius={3}
          paddingLeft={5}
          paddingRight={5}
          backgroundColor="#f1ebf7"
          sx={{ mb: 2, paddingBottom: 1.5 }}
        >
          <Grid container spacing={2} paddingRight={5} >
            <Grid item xs={6} md={2}>
              Date
            </Grid>
            <Grid item xs={6} md={2.5}>
              Time of Payment
            </Grid>
            <Grid item xs={6} md={2.5}>
              Amount of Claim
            </Grid>
            <Grid item xs={6} md={2.5}>
              Claim Type
            </Grid>
            <Grid item xs={6} md={2.3} textAlign="right">
              Payment Approval
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2} fontWeight="500">
          {rows.map((row, index) => (
            <React.Fragment key={index}>
              <Grid item xs={6} md={2} ml={2.5}>
                {row.date}
              </Grid>
              <Grid item xs={6} md={2.5}>
                {row.time}
              </Grid>
              <Grid item xs={6} md={2.2} ml={-2.7}>
                {row.amount}
              </Grid>
              <Grid item xs={6} md={2.5} mr={-2.5}>
                {row.type}
              </Grid>
              <Grid
                item
                xs={6}
                md={2}
                textAlign="right"
                style={{ color: getStatusColor(row.status) }}
              >
                <CircleIcon
                  sx={{
                    fontSize: "12px",
                    mr: 1,
                  }}
                />
                {row.status}
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Pagination count={10} color="secondary" />
      </Box>
    </Container>
  );
};

export default Reimbursements;