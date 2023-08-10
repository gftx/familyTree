import { MainPersonItem } from '../../views';
import { PERSONS } from '../../const/const';
import './index.scss';

const FamilyTree = () => {
  const persons = PERSONS;

  const renderFamilyMember = (member) => {
    const parents = member.parentsIds.map((childId) => {
      const parent = persons.find((node) => node.id === childId);
      return renderFamilyMember(parent);
    });
    console.log("member", member)

    return (
      <div key={member.id}>
        <div className='partnerRow' >
          <MainPersonItem person={member} key={member.id} />
          {member.partnerId && (
            <>
              <div>{"<3"}</div>
              <MainPersonItem person={persons[member.partnerId]} key={persons[member.partnerId].id} />
            </>
          )}
        </div>
        <div className='parentsRow'>
          {parents}
        </div>
      </div>
    );
  };

  // const familyTree = persons.find((node) => node.id === 1);
  const renderedTree = renderFamilyMember(persons[0]);

  return <div>{renderedTree}</div>;
};

export default FamilyTree;
