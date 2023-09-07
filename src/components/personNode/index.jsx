import { Avatar } from "@mui/material";

const PersonNode = ({ person }) => {
  return (
    <div className="person-node">
      <Avatar src={person.photo} />
      <div>
        <h2>{person.name}</h2>
        <p>Дата рождения: {person.birthdate}</p>
        <p>Партнер: {person.partnerId ? "Да" : "Нет"}</p>
      </div>
    </div>
  );
};

export default PersonNode;
