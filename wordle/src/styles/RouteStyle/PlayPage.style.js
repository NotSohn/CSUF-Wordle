import styled from "styled-components";

const Background = styled.div`
  background-color: #00274c;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const GameBoard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FilledBox = styled.div`
  border: 2px solid black;
`;

const LetterRow = styled.div`
  display: flex;
`;

const LetterBox = styled.div`
  border: 2px solid gray;
  border-radius: 3px;
  margin: 2px;
  font-size: 2.5rem;
  font-weight: 700;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export { GameBoard, FilledBox, LetterRow, LetterBox };
