/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./parcours.module.scss";
import boardInfo from "./boardInfo.json";
import BoardCreator from "../../utils/BoardCreator.jsx";
const BoardNames = Object.keys(boardInfo.board);
export default function Parcours({}) {
  const [board, setBoard] = useState([]);
  const [currentBoard, setCurrentBoard] = useState("schoolPath");
  const [fade,setFade] = useState("")
  useEffect(
    function () {
      console.log("current board : ", currentBoard);
      let board = [];
      boardInfo.board[currentBoard].forEach((info, i) => {
        const s = `board${i}`;
        board.push(
          <BoardCreator
            key={`basicBoard${i}`}
            boardType="basic"
            style={styles[s]}
            info={info}
            cssname={currentBoard + i}
          />
        );
      });
      board.push(
        <BoardCreator
          key={"selectiveBoard"}
          boardType="selective"
          style={styles["selectiveBoard"]}
          fhandler={selectiveHandle}
          info={BoardNames}
          cssname={`${currentBoard} selectiveBoard`}
          currentboard={currentBoard}
        />
      );
      setBoard(board);
    },
    [currentBoard]
  );
  useEffect(function(){
    window.addEventListener("scroll",fadeInCss)
    return () =>{window.removeEventListener("scoll",fadeInCss
    )}
  },[])

  const fadeInCss = (e) =>{
    var element = document.getElementById("boardToFade")
    var pageTop = window.pageYOffset
    var pageBottom = pageTop + window.outerHeight;
    var elementTop = element.offsetTop
    if (elementTop < pageBottom) {
      setFade("visible")
    } else {
      console.log("no");
      setFade("")
    }
  };
  
  function selectiveHandle(name) {
    setCurrentBoard(name);
  }
  return (
    <div id={`boardToFade`} className={[styles.boardContainer, styles[fade] ].join(" ")} key={currentBoard}>
      {board}
    </div>
  );
}

