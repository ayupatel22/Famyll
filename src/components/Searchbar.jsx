import React, { useState } from "react";
import { Paper, IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";


const SearchBar = ({
  onSearch,
  setDisplayedComponent,
  toggleComponent,
  previousComponent,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [prevComponent, setPrevComponent] = useState(previousComponent);

  // useEffect(() => {
  //   setPrevComponent(previousComponent);
  // }, [previousComponent]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
    setDisplayedComponent("SearchResults");
    toggleComponent("SearchResults", "Search Results");
    if (value === "") {
      // setDisplayedComponent(prevComponent);
      // toggleComponent(prevComponent, prevComponent);
      // console.log(prevComponent);
      setDisplayedComponent("MyPlan");
      toggleComponent("MyPlan", "My Plan");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    // Optionally, you can add logic here to handle form submission
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        width: "100%", // Adjusted width to take full width
        maxWidth: 800, // Max width increased to 800px
        boxShadow: "none",
        mr: { sm: 2 },
        "@media (min-width: 600px)": {
          // Adjust styles for medium screens and above
          width: "400px", // Auto width for medium screens and above
          maxWidth: "none", // No maximum width for medium screens and above
          flex: 1,
         // Take remaining space
        
         
        },
      }}
    >
      <TextField
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{
        
          paddingTop: "0px",
          "& fieldset": {
            border: "none", // Remove border from fieldset
            width: "100%",
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton type="submit" sx={{ color: "grey" ,marginLeft:"150px"}}>
              <Search />
            </IconButton>
          ),
          sx: {
            paddingRight: "0px",
          },
        }}
      />
    </Paper>
  );
};

export default SearchBar;