import React from "react";
import { useParams } from "react-router-dom";

export default function FormEdit() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Form de Edición</h1>
    </div>
  );
}
