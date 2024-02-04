import React, { useState } from "react";

export default function ComponenteReact() {
  const [cliente, setCliente] = useState("Juan");
  console.log("Cliente y Servidor");
  return <div>{cliente}</div>;
}
