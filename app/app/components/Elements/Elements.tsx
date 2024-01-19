"use client";

import React from 'react';
import { ElementsButtons } from "./ElementsButtons";
import { ElementsHeadings } from "./ElementsHeadings";
import { ElementsInputs } from "./ElementsInputs";
import { ElementsLists } from "./ElementsLists";
import { ElementsText } from "./ElementsText";
import { ElementsTables } from "./ElementsTables";

const elemStyles = {
  section: "pb-6 mb-6",
  header: "block pb-3 mb-6",
  heading: "mb-3 text-2xl text-gray-800 font-sans",
  subheading: "pb-3 mb-3 text-xl text-gray-700 font-medium font-sans",
  description: "text-lg text-gray-700 font-sans",
  content: "block mb-5",
  page: "ms-6 p-6"
}

function Elements() {

  return (
    <div className={elemStyles.page}>
      {/* Start Headings */}
      <ElementsHeadings />

      {/* Start Text */}
      <ElementsText />

      {/* Start Lists */}
      <ElementsLists />

      {/* Start Tables */}
      <ElementsTables />

      {/* Start Inputs */}
      <ElementsInputs />

      {/* Start Buttons */}
      <ElementsButtons />
    </div>
  );
}

export { Elements, elemStyles };