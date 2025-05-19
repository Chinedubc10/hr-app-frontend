import employees from './data/employees';
import PersonCard from './PersonCard';

const PersonList = () => {
  return (
    <main className="container">
      {employees.map((employee) => (
        <PersonCard key={employee.id} employee={employee} />
      ))}
    </main>
  );
};

export default PersonList;
