import { useState } from 'react';

const animalEmoji = (animal) => {
  const map = {
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

  return map[animal] || '🐾';
};

const yearCalculator = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();

  const anniversary =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());

  if (!anniversary) {
    years -= 1;
  }

  return years;
};

const PersonCard = ({ employee }) => {
  const yearsWorked = yearCalculator(employee.startDate);
  const dateDifference = new Date(employee.startDate) - new Date();
  const monthDifference = dateDifference / (1000 * 60 * 60 * 24 * 30.44);

  let message = null;

  if (yearsWorked > 0 && yearsWorked % 5 === 0) {
    message = <p>🎉 Schedule recognition meeting.</p>;
  } else if (monthDifference < 6) {
    message = <p>🔔 Schedule probation review.</p>;
  }

  return (
    <div className="card">
      <h2 className="name">
        {employee.name} {animalEmoji(employee.animal)}
      </h2>
      <div className="card-para">
        <p>
          <strong>Title:</strong> {employee.title}
        </p>
        <p>
          <strong>Department:</strong> {employee.department}
        </p>
        <p>
          <strong>Years Worked:</strong> {yearsWorked}
        </p>

        {message}

        <p>
          <strong>Location:</strong> {employee.location}
        </p>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <p>
          <strong>Phone:</strong> {employee.phone}
        </p>
        <p>
          <strong>Salary:</strong> €{employee.salary}
        </p>
        <p>
          <strong>Skills:</strong> {employee.skills.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default PersonCard;