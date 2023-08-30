import { MainPersonItem } from "../../views";
import { PERSONS } from "../../const/const";
import "./index.scss";
import { useEffect } from "react";

const FamilyTree = () => {
  const persons = PERSONS;
  useEffect(() => {
    console.log({ persons });
  }, []);

  const renderEmptyParents = () => {
    return (
      <div className="partnerRow">
        <MainPersonItem />
        <MainPersonItem />
      </div>
    );
  };
  const renderEmptyParent = () => <MainPersonItem />;

  const renderFamilyMember = (member, firstRow) => {
    let parents;
    if (member.parentsIds.length !== 0 && firstRow) {
      let ids = [...member.parentsIds, Date.now(), Date.now()];
      parents = ids.map((childId) => {
        const parent = persons.find((node) => node.id === childId);
        if (parent) {
          return renderFamilyMember(parent);
        } else {
          return renderEmptyParent();
        }
      });
    } else if (member.parentsIds.length !== 0) {
      parents = member.parentsIds.map((childId) => {
        const parent = persons.find((node) => node.id === childId);
        return renderFamilyMember(parent);
      });
    } else {
      parents = renderEmptyParents();
    }

    return (
      <div key={member.id} className="border">
        <div className="partnerRow">
          <MainPersonItem person={member} key={member.id} />
          {member.partnerId && firstRow && (
            <>
              <div>{"-"}</div>
              <MainPersonItem
                person={persons[member.partnerId]}
                key={persons[member.partnerId].id}
              />
            </>
          )}
        </div>
        <div className="parentsRow">{parents}</div>
      </div>
    );
  };

  // const familyTree = persons.find((node) => node.id === 1);
  const renderedTree = renderFamilyMember(persons[0], true);

  return <div>{renderedTree}</div>;
};

export default FamilyTree;
