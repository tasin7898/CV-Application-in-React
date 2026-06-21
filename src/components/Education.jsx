import { useState } from "react";

function EducationList() {
  const [eduList, setEduList] = useState([
    { "School/Institution": "", "Title of Study": "", "Year of Study": "" },
  ]);
  const [isEditing, setIsEditing] = useState(true);
  const [editId, setEditId] = useState(null);
}
