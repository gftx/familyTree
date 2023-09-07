import { Avatar } from "@mui/material";
import { PERSONS } from "../../const/const";

const PersonNode = ({ person }) => {
  const partner = PERSONS.find((i) => i.id === person.partnerId);
  return (
    <div className="person-node">
      <Avatar src={person.photo} />
      <div>
        <h2>{person.name}</h2>
        <p>Дата рождения: {person.birthdate}</p>
        {person.partnerId && <p>Партнер: {partner?.name}</p>}
      </div>
    </div>
  );
};

export default PersonNode;
