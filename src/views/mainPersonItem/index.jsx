import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function MainPersonItem(props) {
  const { person } = props;

  return (
    <Link to={`../person/${person?.id ?? ""}`}>
      <Box
        sx={{
          border: "1px solid #ffffff",
          display: "flex",
          padding: "10px",
          alignItems: "center",
          flexDirection: "column",
          width: "180px",
          height: "130px",
          borderRadius: "15px",
          cursor: "pointer",
          "&:hover": {
            border: "1px solid #ededed",
            opacity: [0.9, 0.8, 0.7],
          },
          p: 3,
        }}
      >
        <Avatar alt={person?.name ?? ""} src={person?.photo ?? ""} />
        <Typography variant="p">{person?.name ?? ""}</Typography>
        <Typography variant="p">{person?.birthdate ?? ""}</Typography>
      </Box>
    </Link>
  )
}
