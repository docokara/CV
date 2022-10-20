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
 
  switch (type) {
    case "selective":
      return (
        <div key={`${name}`}>
          <select
            key={`${name}`}
            value={currentBoard}
            onChange={({ target: { value } }) => handler(value)}
            className={styles}
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
          style={{"margin" : ".7em"}}
          >

            {infos}
          </td>
        );
      });
      return (
        <table key={`board ${name} table`}>
          <tbody key={`board ${name} body`}>
            <tr key={`board ${name} colomn`} className={styles} >{data}</tr>
          </tbody>
        </table>
      );
    default:
      return <div>Failed !</div>;
  }
}
