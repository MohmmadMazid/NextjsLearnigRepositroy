"use client";
import Script from "next/script";
import React from "react";

const ScriptComponent = () => {
  return (
    <div>
      {/* this script only will be loaded when we access this file routes  */}
      <Script
        src="/jokesApi.js"
        onLoad={() => {
          console.log("Script loaded successfully");
        }}
      />
      <div>
        <h1>
          This is My Script Component For Loading External Script For Specific
          Page
        </h1>
      </div>
    </div>
  );
};

export default ScriptComponent;
