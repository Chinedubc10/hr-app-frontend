import { useMemo } from 'react';

const getAnimalEmoji = (animal) => {
  const emojiMap = {
    Panther: '🐆',
    Koala: '🐨',
    Parrot: '🦜',
    Otter: '🦦',
    Lynx: '🐈‍⬛',
    Walrus: '🦭',
    Tortoise: '🐢',
    Flamingo: '🦩',
    Meerkat: '🦫',
    Llama: '🦙',
  };
  return emojiMap[animal] || '🐾';
};

const calculateYears = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  const isAnniversaryPassed =
    today.getMonth() > start.getMonth() ||
    (today.getMonth() === start.getMonth() && today.getDate() >= start.getDate());

  if (!isAnniversaryPassed) years -= 1;
  return years;
};

const PersonCard = ({ employee }) => {
  const yearsAtCompany = useMemo(() => calculateYears(employee.startDate), [employee.startDate]);
  const monthsSinceStart = useMemo(() => {
    const difference = new Date() - new Date(employee.startDate);
    return difference / (1000 * 60 * 60 * 24 * 30.44);
  }, [employee.startDate]);

  let notification = null;
  if (yearsAtCompany > 0 && yearsAtCompany % 5 === 0) {
    notification = <p>🎉 Schedule recognition meeting.</p>;
  } else if (monthsSinceStart < 6) {
    notification = <p>🔔 Schedule probation review.</p>;
  }

  return (
    <div className="card">
      <h2 className="name">
        {employee.name} {getAnimalEmoji(employee.animal)}
      </h2>
      <div className="card-para">
        <p><strong>Title:</strong> {employee.title}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Years Worked:</strong> {yearsAtCompany}</p>
        {notification}
        <p><strong>Location:</strong> {employee.location}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Salary:</strong> €{employee.salary}</p>
        <p><strong>Skills:</strong> {employee.skills.join(', ')}</p>
      </div>
    </div>
  );
};

export default PersonCard;
