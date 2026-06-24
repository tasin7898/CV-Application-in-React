import { useState } from "react";

function ExperienceList() {
  const [xpList, setXpList] = useState([
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      jobDescription: "",
      isCurrentlyWorking: false,
      startDate: "",
      endDate: "",
    },
  ]);
  const [editId, setEditId] = useState(xpList[0].id);
  function handleAddEntry() {
    console.log(editId);
    console.log(isEntryValid(editId));
    if (editId && !isEntryValid(editId)) return;
    const uniqueId = crypto.randomUUID();
    setXpList((prev) => [
      ...prev,
      {
        id: uniqueId,
        company: "",
        position: "",
        jobDescription: "",
        isCurrentlyWorking: false,
        startDate: "",
        endDate: "",
      },
    ]);
    setEditId(uniqueId);
  }
  function handleChange(id, e) {
    const { name, value, type, checked } = e.target;
    setXpList((prev) =>
      prev.map((xp) => {
        if (xp.id !== id) return xp;

        if (name === "isCurrentlyWorking" && checked) {
          return { ...xp, isCurrentlyWorking: true, endDate: "" };
        }

        return { ...xp, [name]: type === "checkbox" ? checked : value };
      }),
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
    setXpList((prev) => prev.filter((xp) => xp.id !== id));
    setEditId(null);
  }

  function isEntryValid(id) {
    const xpInfo = xpList.find((xp) => xp.id === id);
    console.log(xpInfo);
    if (!xpInfo) return;
    const fieldsTovalidate = [
      "company",
      "position",
      "jobDescription",
      "startDate",
    ];
    if (!xpInfo.isCurrentlyWorking) {
      fieldsTovalidate.push("endDate");
    }
    return !fieldsTovalidate.some((val) => !xpInfo[val].trim());
  }
  return (
    <>
      {xpList.map(
        ({
          id,
          company,
          position,
          jobDescription,
          isCurrentlyWorking,
          startDate,
          endDate,
        }) =>
          editId === id ? (
            <div className="experience-list-edit" key={id}>
              <label>
                Company:{" "}
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e) => {
                    handleChange(id, e);
                  }}
                />
              </label>

              <label>
                Job Title:{" "}
                <input
                  type="text"
                  name="position"
                  value={position}
                  onChange={(e) => {
                    handleChange(id, e);
                  }}
                />
              </label>
              <label>
                Job Description:{" "}
                <textarea
                  name="jobDescription"
                  value={jobDescription}
                  onChange={(e) => {
                    handleChange(id, e);
                  }}
                ></textarea>
              </label>
              <label>
                Currently Working
                <input
                  type="checkbox"
                  name="isCurrentlyWorking"
                  checked={isCurrentlyWorking}
                  onChange={(e) => {
                    handleChange(id, e);
                  }}
                />
              </label>
              <label>
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  value={startDate}
                  onChange={(e) => {
                    handleChange(id, e);
                  }}
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  name="endDate"
                  value={endDate}
                  disabled={isCurrentlyWorking}
                  onChange={(e) => {
                    handleChange(id, e);
                  }}
                />
              </label>
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
            <div className="experience-list-display" key={id}>
              <p className="xp-display">
                <strong>Company/: </strong>
                {company}
              </p>
              <p className="xp-display">
                <strong>Job Title: </strong>
                {position}
              </p>
              <p className="xp-display">
                <strong>Job Description: </strong>
                {jobDescription}
              </p>
              <p className="xp-display">
                <strong>Start Date: </strong>
                {startDate}
              </p>
              {isCurrentlyWorking ? (
                <p>
                  <strong>Currently Working</strong>
                </p>
              ) : (
                <p className="xp-display">
                  <strong>End Date: </strong>
                  {endDate}
                </p>
              )}

              <button onClick={() => handleEdit(id)}>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          ),
      )}
      <button onClick={handleAddEntry}>Add</button>
    </>
  );
}

export default ExperienceList;
