"use client";
import React, { useEffect } from "react";

export function MyClientComponent({ param }: { param: string }) {
  useEffect(() => {
    console.log("hello!");
  }, []);
  return <div>This is the component: {param}</div>;
}
