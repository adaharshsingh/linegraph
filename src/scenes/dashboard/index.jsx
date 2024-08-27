import { Box, Typography, useTheme, Button, ButtonGroup, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { useState } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Responsive hook for small screens

  // State to manage selected time frame for each graph
  const [internetGraphTimeFrame, setInternetGraphTimeFrame] = useState("day");
  const [motionGraphTimeFrame, setMotionGraphTimeFrame] = useState("day");
  const [latencyGraphTimeFrame, setLatencyGraphTimeFrame] = useState("day");
  const [newGraphTimeFrame, setNewGraphTimeFrame] = useState("day"); // State for new graph

  const handleInternetTimeFrameChange = (frame) => {
    setInternetGraphTimeFrame(frame);
  };

  const handleMotionTimeFrameChange = (frame) => {
    setMotionGraphTimeFrame(frame);
  };

  const handleLatencyTimeFrameChange = (frame) => {
    setLatencyGraphTimeFrame(frame);
  };

  const handleNewGraphTimeFrameChange = (frame) => {
    setNewGraphTimeFrame(frame); // Function to handle time frame changes for the new graph
  };

  // Define button styles for light and dark modes
  const buttonStyles = {
    light: {
      backgroundColor: "#ffffff", // White background
      color: "#007bff", // Blue text
      borderColor: "#007bff" // Blue border
    },
    dark: {
      backgroundColor: colors.primary[400], // Primary background color
      color: colors.grey[100], // Text color
      borderColor: "#007bff" // Blue border
    }
  };

  const currentButtonStyles = buttonStyles[theme.palette.mode] || buttonStyles.dark;

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Internet Sensor Graph - Top Line Chart */}
        <Box gridColumn="span 12" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Internet Sensor Graph
              </Typography>
            </Box>
            {/* Time Frame Buttons for Internet Sensor Graph */}
            <ButtonGroup
              variant="outlined" // Use outlined variant to apply border styles
              color="primary"
              orientation={isSmallScreen ? "vertical" : "horizontal"} // Responsive orientation
            >
              <Button
                onClick={() => handleInternetTimeFrameChange("day")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 3 hours
              </Button>
              <Button
                onClick={() => handleInternetTimeFrameChange("week")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 24 hours
              </Button>
              <Button
                onClick={() => handleInternetTimeFrameChange("month")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 7 days
              </Button>
              <Button
                onClick={() => handleInternetTimeFrameChange("year")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 30 days
              </Button>
            </ButtonGroup>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} timeFrame={internetGraphTimeFrame} />
          </Box>
        </Box>

        {/* Motion Graph Sensor - Bottom Left Line Chart */}
        <Box gridColumn="span 6" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Motion Graph Sensor
              </Typography>
            </Box>
            {/* Time Frame Buttons for Motion Graph Sensor */}
            <ButtonGroup
              variant="outlined" // Use outlined variant to apply border styles
              color="primary"
              orientation={isSmallScreen ? "vertical" : "horizontal"} // Responsive orientation
            >
              <Button
                onClick={() => handleMotionTimeFrameChange("day")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 3 hours
              </Button>
              <Button
                onClick={() => handleMotionTimeFrameChange("week")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 24 hours
              </Button>
              <Button
                onClick={() => handleMotionTimeFrameChange("month")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 7 days
              </Button>
              <Button
                onClick={() => handleMotionTimeFrameChange("year")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 30 days
              </Button>
            </ButtonGroup>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} timeFrame={motionGraphTimeFrame} />
          </Box>
        </Box>

        {/* Latency Sensor Graph - Bottom Right Line Chart */}
        <Box gridColumn="span 6" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Latency Sensor Graph
              </Typography>
            </Box>
            {/* Time Frame Buttons for Latency Sensor Graph */}
            <ButtonGroup
              variant="outlined" // Use outlined variant to apply border styles
              color="primary"
              orientation={isSmallScreen ? "vertical" : "horizontal"} // Responsive orientation
            >
              <Button
                onClick={() => handleLatencyTimeFrameChange("day")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 3 hours
              </Button>
              <Button
                onClick={() => handleLatencyTimeFrameChange("week")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 24 hours
              </Button>
              <Button
                onClick={() => handleLatencyTimeFrameChange("month")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 7 days
              </Button>
              <Button
                onClick={() => handleLatencyTimeFrameChange("year")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 30 days
              </Button>
            </ButtonGroup>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} timeFrame={latencyGraphTimeFrame} />
          </Box>
        </Box>

        {/* New Graph - Full Width Line Chart */}
        <Box gridColumn="span 12" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                New Sensor Graph
              </Typography>
            </Box>
            {/* Time Frame Buttons for New Graph */}
            <ButtonGroup
              variant="outlined" // Use outlined variant to apply border styles
              color="primary"
              orientation={isSmallScreen ? "vertical" : "horizontal"} // Responsive orientation
            >
              <Button
                onClick={() => handleNewGraphTimeFrameChange("day")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 3 hours
              </Button>
              <Button
                onClick={() => handleNewGraphTimeFrameChange("week")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 24 hours
              </Button>
              <Button
                onClick={() => handleNewGraphTimeFrameChange("month")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 7 days
              </Button>
              <Button
                onClick={() => handleNewGraphTimeFrameChange("year")}
                style={{ ...currentButtonStyles, border: `2px solid ${currentButtonStyles.borderColor}` }}
              >
                Last 30 days
              </Button>
            </ButtonGroup>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} timeFrame={newGraphTimeFrame} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
