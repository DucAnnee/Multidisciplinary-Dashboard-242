import { WarningOutlined } from "@mui/icons-material";
import { Box, Grid2, Paper, Typography, Checkbox } from "@mui/material";

import {
  PieChart as RechartsPieChart,
  Tooltip as RechartsTooltip,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Label,
} from "recharts";

import { useState } from "react";
import SwitchComponent from "../components/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShowerIcon from "@mui/icons-material/Shower";

export default function Dashboard() {
  const [lightOn, setLightOn] = useState(false);
  const [autoLight, setAutoLight] = useState(false);

  const [motorOn, setMotorOn] = useState(false);
  const [autoMotor, setAutoMotor] = useState(false);

  const [diseased, setDiseased] = useState(false);

  const [temperatureData, setTemperature] = useState([]);
  const [humidityData, setHumidity] = useState([]);
  const [lightData, setLight] = useState([]);

  // Sample data for graphs
  const sampleData = (type) => {
    return Array.from({ length: 20 }, (_, i) => ({
      timestamp: `2023-10-01T12:${i}0:00Z`,
      value: Math.floor(Math.random() * 100),
    }));
  };

  // Initialize sample data
  if (temperatureData.length === 0) {
    setTemperature(sampleData("temperature"));
    setHumidity(sampleData("humidity"));
    setLight(sampleData("light"));
  }
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        p: 2,
      }}
    >
      <Grid2
        container
        spacing={4}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* 1 Left panel: Button controllers and Image display */}
        <Grid2
          item
          size={{ xs: 4 }}
          sx={{
            height: "100%",
            display: "flex",
          }}
        >
          <Grid2
            container
            gap={2}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* 1.1 Controllers */}
            <Grid2
              item
              size={{ xs: 4 }}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                color="primary.dark"
                sx={{ mb: 1 }}
              >
                Controllers
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <ControllerButton
                  label="Water Pump"
                  icon={<ShowerIcon sx={{ color: "primary.dark" }} />}
                  onChangeController={() => {
                    setMotorOn(!motorOn);
                  }}
                  onChangeAuto={() => {
                    setAutoMotor(!autoMotor);
                  }}
                  checked={motorOn}
                  autoChecked={autoMotor}
                />
                {/* 1.1.2 Light */}
                <ControllerButton
                  label="Light"
                  icon={<LightModeIcon />}
                  onChangeController={() => {
                    setLightOn(!lightOn);
                  }}
                  onChangeAuto={() => {
                    setAutoLight(!autoLight);
                  }}
                  checked={lightOn}
                  autoChecked={autoLight}
                />
              </Box>
              {/* 1.1.1 Motor */}
            </Grid2>

            {/* 1.2 Image display */}
            <Grid2
              item
              size="grow"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                color="primary.dark"
                sx={{ mb: 1 }}
              >
                Camera Feed
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Paper
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    backgroundColor: "primary.light",
                    borderRadius: "12px",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      alignSelf: "center",
                      justifySelf: "center",
                      borderRadius: "8px",
                      overflow: "hidden",
                      width: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      justifyContent: "center",
                      py: 2,
                    }}
                  >
                    <img
                      src="unavailable_image.jpg"
                      alt="unavailable camera feed"
                      style={{
                        position: "relative",
                        alignSelf: "center",
                        justifySelf: "center",
                        width: "90%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    {/* Warning widget */}
                    {diseased && (
                      <Box
                        sx={{
                          position: "absolute",
                          width: "50%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          margin: 2,
                          backgroundColor: "rgba(245,80, 80, 0.8)",
                          color: "white",
                          padding: 1,
                          gap: 2,
                          borderRadius: "8px",
                        }}
                      >
                        <WarningOutlined sx={{ fontSize: 30 }} />
                        <Typography variant="body2">
                          Diseased Plant Detected!
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Paper>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
        {/* 2 Right panel: Graphs */}
        <Grid2
          item
          size="grow"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Grid2
            container
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid2
              container
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                color="primary.dark"
                sx={{ mb: 1 }}
              >
                Sensor Data
              </Typography>
              <Box
                sx={{
                  height: "94%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {/* 2.1 Temperature */}
                <Grid2 item sx={{ width: "100%", flexGrow: 1 }}>
                  <GraphDisplay
                    title="Temperature"
                    data={temperatureData}
                    lineColor={"rgba(239, 161, 84, 1)"}
                  />
                </Grid2>
                {/* 2.2 Humidity */}
                <Grid2 item sx={{ width: "100%", flexGrow: 1 }}>
                  <GraphDisplay
                    title="Humidity"
                    data={humidityData}
                    lineColor={"rgba(162, 243, 255, 1)"}
                  />
                </Grid2>
                {/* 2.3 Light */}
                <Grid2 item sx={{ width: "100%", flexGrow: 1 }}>
                  <GraphDisplay
                    title="Light Intensity"
                    data={lightData}
                    lineColor={"rgba(255, 245, 171, 1)"}
                  />
                </Grid2>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

const ControllerButton = ({
  label,
  icon,
  onChangeController,
  onChangeAuto,
  checked,
  autoChecked,
}) => {
  return (
    <Paper
      sx={{
        borderRadius: "12px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.light",
        // transition: "transform 0.25s ease-out",
        // "&:hover": {
        //   transform: "translateY(-2px)",
        // },
      }}
    >
      <Paper
        sx={{
          borderRadius: "8px",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E9E9EA",
          padding: 2,
          margin: 2,
        }}
      >
        {icon}
        {label}
      </Paper>
      <SwitchComponent
        disabled={autoChecked}
        checked={checked}
        onChange={onChangeController}
        sx={{
          cursor: autoChecked ? "not-allowed" : "pointer",
        }}
      />
      <Box
        sx={{
          alignSelf: "flex-start",
          marginLeft: 2,
        }}
      >
        <Checkbox
          checked={autoChecked}
          onChange={onChangeAuto}
          sx={{
            color: "primary.dark",
            "&.Mui-checked": {
              color: "primary.dark",
            },
          }}
        />
        Auto
      </Box>
    </Paper>
  );
};

const GraphDisplay = ({ title, data, lineColor }) => {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.light",
        borderRadius: "12px",
        padding: 1,
      }}
    >
      <ResponsiveContainer width="100%" height="80%">
        <RechartsLineChart data={data}>
          <XAxis
            dataKey="timestamp"
            axisLine={{ stroke: "rgba(6, 67, 33, 1)" }}
            tickLine={{ stroke: "rgba(6, 67, 33, 1)" }}
            tick={{ fill: "rgba(6, 67, 33, 1)" }}
          />

          <YAxis
            label={{
              value:
                title === "Temperature"
                  ? "°C"
                  : title === "Humidity"
                    ? "%"
                    : "Lux", // or "%" or "Lux", etc.
              position: "insideLeft",
              offset: 10,
              fill: "rgba(6, 67, 33, 1)",
              style: { textAnchor: "middle", fontSize: 18 },
            }}
            axisLine={{ stroke: "rgba(6, 67, 33, 1)" }}
            tickLine={{ stroke: "rgba(6, 67, 33, 1)" }}
            tick={{ fill: "rgba(6, 67, 33, 1)" }}
          />

          <CartesianGrid strokeDasharray="4 2" stroke="rgba(255,255,255,0.2)" />

          <RechartsTooltip
            contentStyle={{ backgroundColor: "#222", borderColor: "#555" }}
            labelStyle={{ color: "rgba(6, 67, 33, 1)" }}
            itemStyle={{ color: "rgba(6, 67, 33, 1)" }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={2}
            dot={false}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
      <Typography variant="h9" color="primary.dark" sx={{ mt: 1 }}>
        {title}
      </Typography>
    </Paper>
  );
};
