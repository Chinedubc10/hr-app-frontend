import { useState } from 'react';
import axios from 'axios';

const getAnimalEmoji = (animal) => {
  const emojis = {
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
  return emojis[animal] || '🐾';
};

const calculateYearsWorked = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  const hasAnniversaryPassed =
    today.getMonth() > start.getMonth() ||
    (today.getMonth() === start.getMonth() && today.getDate() >= start.getDate());

  return hasAnniversaryPassed ? years : years - 1;
};

const PersonCard = ({ employee, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const [formData, setFormData] = useState({
    salary: employee.salary,
    location: employee.location,
    department: employee.department,
    skills: employee.skills.join(', ')
  });

  const yearsWorked = calculateYearsWorked(employee.startDate);
  const monthsSinceStart = (new Date() - new Date(employee.startDate)) / (1000 * 60 * 60 * 24 * 30.44);

  const reminderMessage =
    yearsWorked > 0 && yearsWorked % 5 === 0 ? (
      <p>🎉 Schedule recognition meeting.</p>
    ) : monthsSinceStart < 6 ? (
      <p>🔔 Schedule probation review.</p>
    ) : null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showTemporaryMessage = (message) => {
    setStatusMessage(message);
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const handleSave = async () => {
    const updatedEmployee = {
      salary: Number(formData.salary),
      location: formData.location,
      department: formData.department,
      skills: formData.skills.split(',').map((skill) => skill.trim())
    };

    try {
      const response = await axios.patch(`http://localhost:3001/employees/${employee.id}`, updatedEmployee);
      onUpdate(response.data);
      setIsEditing(false);
      showTemporaryMessage('Changes saved!');
    } catch (err) {
      console.error('Error saving changes:', err);
    }
  };

  const handleCancel = () => {
    setFormData({
      salary: employee.salary,
      location: employee.location,
      department: employee.department,
      skills: employee.skills.join(', ')
    });
  };

  return (
    <div className="card">
      <h2 className="name">
        {employee.name} {getAnimalEmoji(employee.animal)}
      </h2>

      <div className="card-para">
        <p><strong>Title:</strong> {employee.title}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Years Worked:</strong> {yearsWorked}</p>

        {reminderMessage}

        <div className="button-row">
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            ✏️ Edit
          </button>
        </div>

        {!isEditing ? (
          <>
            <p><strong>Location:</strong> {employee.location}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Salary:</strong> €{employee.salary}</p>
            <p><strong>Skills:</strong> {employee.skills.join(', ')}</p>
          </>
        ) : (
          <div className="edit-form">
            <label>Salary:</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
            />

            <label>Location:</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />

            <label>Department:</label>
            <input
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />

            <label>Skills (comma-separated):</label>
            <input
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
            />

            <div className="edit-buttons">
              <button className="save-btn" onClick={handleSave}>✅ Save</button>
              <button className="cancel-btn" onClick={handleCancel}>❌ Cancel</button>
            </div>
          </div>
        )}

        {statusMessage && (
          <p
            style={{
              color: statusMessage.includes('✅') ? 'green' : 'red',
              fontWeight: 'bold',
              marginTop: '10px'
            }}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
