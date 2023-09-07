import { PersonNode } from "../../components/index";

const FamilyTree = ({ familyData }) => {
  // Функция для рекурсивного построения дерева
  const renderTree = (personId) => {
    const person = familyData.find((p) => p.id === personId);
    if (!person) return null;

    return (
      <div key={person.id} className="family-tree">
        <PersonNode person={person} />
        <div className="children">
          {person.childrenIds.map((childId) => renderTree(childId))}
        </div>
      </div>
    );
  };

  return <div className="family-tree">{renderTree(5)}</div>; // Начнем с корневого члена семьи
};

export default FamilyTree;
