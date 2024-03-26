import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import MyPlan from "./MyPlan";
import practitionersData from "../utlis/practitionerData";
import PlanDetails from "./PlanDetails";
import ViewDetails from "./ViewDetails";
import MakeClaim from "./MakeClaim";
import ChangeLanguage from "./ChangeLanguage";
import PreventiveExams from "./PreventiveExams";
import Provider from "./Provider";
import Reimbursements from "./Reimbursements";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("My Plan");
  const [displayedComponent, setDisplayedComponent] = useState("MyPlan");
  const [appBarTitle, setAppBarTitle] = useState("My Plan");
  const [selectedPractitioner, setSelectedPractitioner] = useState(null);
  const [historyStack, setHistoryStack] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [previousComponent, setPreviousComponent] = useState("MyPlan");

  const handleSearch = (searchTerm) => {
    // Perform search logic here
    // Assuming data is an array of objects with a 'name' property to search against
    const updatedResults = practitionersData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(updatedResults);
  };

  const toggleComponent = (component, title, practitioner) => {
    setSelectedPractitioner(practitioner);
    if (
       component === "PlanDetails" ||
      component === "MakeClaim" ||
      component === "ViewDetails" 
    ) {
      setHistoryStack([...historyStack, [selectedCategory, appBarTitle]]);
    } else {
      // Only update history stack if navigating forward
      if (
        historyStack.length > 0 &&
        historyStack[historyStack.length - 1][0] !== selectedCategory
      ) {
        setHistoryStack([...historyStack, [selectedCategory, appBarTitle]]);
      }
    }
    setDisplayedComponent(component);
    if (component !== "SearchResults") {
      setPreviousComponent(component);
    }
    console.log(previousComponent);
    setAppBarTitle(title);
  };

  const componentMap = {
    MyPlan: (
      <MyPlan
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    PlanDetails: (
      <PlanDetails
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    ViewDetails: (
      <ViewDetails
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
        practitioner={selectedPractitioner}
      />
    ),
    MakeClaim: (
      <MakeClaim
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    ChangeLanguage: (
      <ChangeLanguage
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    PreventiveExams: (
      <PreventiveExams
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
      />
    ),
    searchResults: (
      <searchResults
        toggleComponent={toggleComponent}
        setDisplayedComponent={setDisplayedComponent}
        practitioner={selectedPractitioner}
        practitioners={searchResults}
        previousComponent={previousComponent}
      />
    ),
    Provider: (
      <Provider
      toggleComponent={toggleComponent}
      setDisplayedComponent={setDisplayedComponent}
      practitioners={searchResults}
      previousComponent={previousComponent}
    />
      
    ),
    Reimbursements: (
      <Reimbursements
      toggleComponent={toggleComponent}
      setDisplayedComponent={setDisplayedComponent}
      //practitioners={searchResults}
     // previousComponent={previousComponent}
    />
    ),

  };

  return (
    <Sidebar
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      appBarTitle={appBarTitle}
      setAppBarTitle={setAppBarTitle}
      displayedComponent={displayedComponent} // Pass displayedComponent as prop
      toggleComponent={toggleComponent}
      historyStack={historyStack}
      setHistoryStack={setHistoryStack}
      setDisplayedComponent={setDisplayedComponent} // Pass setDisplayedComponent
      onSearch={handleSearch}
    >
      <Box width="100%">{componentMap[displayedComponent]}</Box>
    </Sidebar>
  );
};

export default Home;