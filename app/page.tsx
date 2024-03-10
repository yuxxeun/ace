"use client"
import { NextPage } from "next";
import React from "react";
import { useUserIp } from '../utils/useUserIp'

const HomePage: NextPage = () => {
  const ip = useUserIp();
  return (
    <div className="container">
      <p>Your ip: {ip}</p>
    </div>
  );
};
export default HomePage;