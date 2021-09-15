import React, { useEffect, useState } from "react";
import "./App.css";
import { CHARACTERS } from "./charactersData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

function App() {
  const [characters, updateCharacters] = useState(CHARACTERS);
  function handleOnDragEnd(result: any) {
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  useEffect(() => {
    console.log(characters);
  }, [characters]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>めそこスタンプ</h1>
        <Container>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {characters.map(({ id, name, thumb }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="characters-thumb">
                              <ImageContainer>
                                <img src={thumb} alt={`${name} Thumb`} />
                              </ImageContainer>
                            </div>
                            <p>{name}</p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </Container>
      </header>
    </div>
  );
}

export default App;

const ImageContainer = styled.div`
  img {
    width: 200px;
  }
`;
const Container = styled.div`
  ul {
    list-style: none;
  }
`;
