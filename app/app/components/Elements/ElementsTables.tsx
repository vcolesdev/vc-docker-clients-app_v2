"use client";

import React from "react";
import { elemStyles } from "./Elements";
import { paraStyles } from "./ElementsText";

const tablesStyles = {
  styles: "mb-3 font-sans font-normal text-gray-700 leading-relaxed",
  table: "border-collapse border border-gray-300",
  th: "border border-gray-300 px-3 py-2",
  td: "border border-gray-300 px-3 py-2",
}

export default function ElementsTables() {
  return (
    <>
      <section className={elemStyles.section} data-title="Tables">
        <header className={elemStyles.header}>
          <h2 className={elemStyles.heading}>Tables</h2>
          <p className={elemStyles.description}>Tables are used for displaying a series of related content.</p>
        </header>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Basic</h3>
          <table className={paraStyles.styles}>
            <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 3</td>
            </tr>
            <tr>
              <td>Cell 4</td>
              <td>Cell 5</td>
              <td>Cell 6</td>
            </tr>
            <tr>
              <td>Cell 7</td>
              <td>Cell 8</td>
              <td>Cell 9</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className={elemStyles.content}>
          <h3 className={elemStyles.subheading}>Striped</h3>
          <table className={paraStyles.styles}>
            <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 3</td>
            </tr>
            <tr>
              <td>Cell 4</td>
              <td>Cell 5</td>
              <td>Cell 6</td>
            </tr>
            <tr>
              <td>Cell 7</td>
              <td>Cell 8</td>
              <td>Cell 9</td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export { ElementsTables, tablesStyles }