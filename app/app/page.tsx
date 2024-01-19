"use client";

import React, { useEffect, useState } from "react";
import { Elements } from "./components/Elements/Elements";

interface IClient {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  comments?: string;
}

export default function Page() {
  const [clients, setClients] = useState(null);

  const uri = "https://api.clientsapp.local:8443/clients/";

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch(uri);
      const data = await response.json();
      setClients(data);
    };

    fetchClients().catch(console.error);
  }, [clients]);

  return (
    <>
      <h1 className="_tw.text-2xl _tw.text-gray-800 _tw.font-sans">Hello, Next.js!</h1>
      <h2 className="_tw.text-xl _tw.text-gray-700 _tw.font-sans">Clients List</h2>
      <ul>
        {clients &&
          clients.map((client: IClient) => (
            <>
              <li key={client.email}>
                {client.firstName} {client.lastName}
              </li>
              <li>{client.email}</li>
            </>
          ))}
      </ul>
      <Elements />
    </>
  );
}
