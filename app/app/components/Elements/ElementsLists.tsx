"use client";

import React from "react";
import useList from "../List/useList";
import { elemStyles } from "./Elements";
import { List } from "../List/List";

function ElementsLists() {
  const { listItems } = useList();
  
  return (
    <>
      <section className={elemStyles.section} data-title="List Components">
        <header className={elemStyles.header}>
          <h2 className={elemStyles.heading}>List Components</h2>
          <p className={elemStyles.description}>Lists are used for displaying a series of related content.</p>
        </header>
        <div className={elemStyles.content}>
          <List.ul>
            {listItems.ul.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </List.ul>
          <List.ol>
            {listItems.ol.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </List.ol>
          <List.dl>
            {listItems.dl.map((item, index) => (
              <li key={index}>
                <dt>{item.title}</dt>
                <dd>{item.description}</dd>
              </li>
            ))}
          </List.dl>
        </div>
      </section>
    </>
  )
}

export { ElementsLists }