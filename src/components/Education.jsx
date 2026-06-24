import { useState } from "react";

function EducationList() {
  const [eduList, setEduList] = useState([
    { id: crypto.randomUUID(), school: "", study: "", year: "" },
  ]);
  const [editId, setEditId] = useState(eduList[0].id);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 67 }, (_, i) => currentYear - i);
  function handleAddEntry() {
    if (editId && !isEntryValid(editId)) return;
    const uniqueId = crypto.randomUUID();
    setEduList((prev) => [
      ...prev,
      { id: uniqueId, school: "", study: "", year: "" },
    ]);
    setEditId(uniqueId);
  }
  function handleChange(id, e) {
    const { name, value } = e.target;
    setEduList((prev) =>
      prev.map((edu) => (edu.id === id ? { ...edu, [name]: value } : edu)),
    );
  }
  function handleEdit(id) {
    setEditId(id);
  }
  function handleSubmit(id) {
    if (!isEntryValid(id)) return;
    setEditId(null);
  }
  function handleDelete(id) {
    setEduList((prev) => prev.filter((edu) => edu.id !== id));
    setEditId(null);
  }

  function isEntryValid(id) {
    const eduInfo = eduList.find((edu) => edu.id === id);
    if (!eduInfo) return;
    const isEmpty = Object.values(eduInfo).some((val) => !val.trim());
    if (isEmpty) return false;
    return true;
  }
  return (
    <>
      {eduList.map(({ id, school, study, year }) =>
        editId === id ? (
          <div className="education-list-edit" key={id}>
            <label>
              School/Institution:{" "}
              <input
                type="text"
                name="school"
                value={school}
                onChange={(e) => {
                  handleChange(id, e);
                }}
              />
            </label>

            <label>
              Title of Study:{" "}
              <input
                type="text"
                name="study"
                value={study}
                onChange={(e) => {
                  handleChange(id, e);
                }}
              />
            </label>

            <select
              name="year"
              value={year}
              onChange={(e) => handleChange(id, e)}
            >
              <option value="">Select Year</option>
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                handleSubmit(id);
              }}
            >
              Save
            </button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        ) : (
          <div className="education-list-display" key={id}>
            <p className="edu-display">
              <strong>School/Institution: </strong>
              {school}
            </p>
            <p className="edu-display">
              <strong>Title of Study: </strong>
              {study}
            </p>
            <p className="edu-display">
              <strong>Year of Study: </strong>
              {year}
            </p>
            <button onClick={() => handleEdit(id)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        ),
      )}
      <button onClick={handleAddEntry}>Add</button>
    </>
  );
}

export default EducationList;
