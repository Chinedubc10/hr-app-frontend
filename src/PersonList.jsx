import PersonCard from './PersonCard';

const PersonList = ({ employees }) => {
  return (
    <div className="container">
      {employees.map((item) => (
        <PersonCard key={item.id} employee={item} />
      ))}
    </div>
  );
};

export default PersonList;