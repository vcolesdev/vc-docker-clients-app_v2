import * as React from "react";
import styles from "./List.module.scss";

interface ListProps {
    type: "ul" | "ol" | "dl";
    children: React.ReactNode | React.ReactNode[];
}

function List({ type, children } : ListProps) {
    return (
        <ul className={styles[`ca-list-${type}`]}>
            {children}
        </ul>
    )      
}

const ol = ({ children }) => {
    return (
        <ol className={styles["ca-list-ol"]}>
            {children}
        </ol>
    )
}

const ul = ({ children }) => {
    return (
        <ul className={styles["ca-list-ul"]}>
            {children}
        </ul>
    )
}

const dl = ({ children }) => {
    return (
        <dl className={styles["ca-list-dl"]}>
            {children}
        </dl>
    )
}

List.ol = ol;
List.ul = ul;
List.dl = dl;

export { List };