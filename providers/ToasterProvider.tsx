"use client"

import { Toaster } from "react-hot-toast"

export default function ToasterProvider() {
    return (
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#fff",
            color: "#333",
            marginBottom: "20px",
          },
        }}
      />
    );
}