import { useState } from 'react';

const animalEmojis = {
  Panther: '🐆',
  Koala: '🐨',
  Parrot: '🦜',
  Otter: '🦦',
  Lynx: '🐈‍⬛',
  Walrus: '🦭',
  Tortoise: '🐢',
  Flamingo: '🦩',
  Meerkat: '🦫',
  Llama: '🦙'
};

function getAnimalEmoji(animal) {
  return animalEmojis[animal] || '🐾'; 
}

function calculateYearsEmployed(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();

  const hasHadAnniversaryThisYear =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());

  if (!hasHadAnniversaryThisYear) {
    years -= 1;
  }

  return years;
}

const PersonCard = ({ employee }) => {
  const yearsEmployed = calculateYearsEmployed(employee.startDate);

  const monthsSinceStart =
    (new Date() - new Date(employee.startDate)) / (1000 * 60 * 60 * 24 * 30.44);

  let notification = null;

  if (yearsEmployed > 0 && yearsEmployed % 5 === 0) {
    notification = <p className="notification">🎉 Time to schedule a recognition meeting!</p>;
  } else if (monthsSinceStart < 6) {
    notification = <p className="notification">🔔 Probation review coming up soon.</p>;
  }

  return (
    <div className="card">
      <h2 className="name">
        {employee.name} {getAnimalEmoji(employee.animal)}
      </h2>
      <div className="card-para">
        <p><strong>Title:</strong> {employee.title}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Years Employed:</strong> {yearsEmployed}</p>
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
