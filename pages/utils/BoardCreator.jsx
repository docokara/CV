import React, { useEffect, useState } from "react";
//import styles from "./parcours.module.scss";

export default function BoardCreator({
  boardType,
  style,
  fhandler,
  cssname,
  info,
  currentboard
}) {

  const type = boardType;
  const styles = style;
  const handler = fhandler;
  const name = cssname;
  const informations = info;
  const currentBoard = currentboard
  const board = () => {
    switch (type) {
      case "selective":
        return (
          <div className={styles} key={`${name}`}>
            <select
              key={`${name}`}
              value={currentBoard}
              onChange={({ target: { value } }) => handler(value)}
              className={`${name}`}
            >
              {" "}
              {informations.map((element, i) => {
                return (
                  <option key={`${name}${i}`} value={element}>
                    {element}
                  </option>
                );
              })}
            </select>
          </div>
        );
      case "basic":
        const data = [];
        informations.forEach((infos, i) => {
          data.push(
            <td
              key={`informations ${i} ${name}`}
              id={`informations ${i} ${name}`}
              className={styles}
            >
              {infos}
            </td>
          );
        });
        return (
          <table key={`board ${name} table`} width="100%">
            <tbody key={`board ${name} body`}>
              <tr key={`board ${name} colomn`}>{data}</tr>
            </tbody>
          </table>
        );
      default:
        return <div>Failed !</div>;
    }
  };
  return(board())
}
