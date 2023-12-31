import Container from "@mui/material/Container";
import { FamilyTree } from "../index.js";
import { PERSONS } from "../../const/const.js";

export default function MainPage() {
  return (
    <Container
      component="main"
      sx={{
        mt: 8,
        mb: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FamilyTree familyData={PERSONS} />
    </Container>
  );
}
