import { useState } from "react";

function GeneralInfo() {
  const [genInfo, setGenInfo] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setGenInfo((prev) => ({ ...prev, [name]: value }));
  }
  function handleEdit() {
    setIsEditing(true);
  }
  function handleSubmit() {
    const isEmpty = Object.values(genInfo).some((val) => !val.trim());
    if (isEmpty) return;
    setIsEditing(false);
  }

  return isEditing ? (
    <div className="general-info-edit">
      <label>
        Name{" "}
        <input
          type="text"
          name="name"
          value={genInfo.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email{" "}
        <input
          type="text"
          name="email"
          value={genInfo.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone{" "}
        <input
          type="number"
          name="phone"
          value={genInfo.phone}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Save</button>
    </div>
  ) : (
    <div className="general-info-display">
      <p className="display">
        <strong>Name: </strong>
        {genInfo.name}
      </p>
      <p className="display">
        <strong>Email: </strong>
        {genInfo.email}
      </p>
      <p className="display">
        <strong>Phone: </strong>
        {genInfo.phone}
      </p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default GeneralInfo;