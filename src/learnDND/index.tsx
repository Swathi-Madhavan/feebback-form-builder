import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import initialData from "./data";
import Column from "./Column";

const Container = styled("div")`
  display: flex;
  background-color: ${(props: any) =>
    props.isDraggingOver ? "#639ee2" : "inherit"};
`;

const DNDTEST = () => {
  const [starter, setStarter] = useState<any>(initialData);

  const onDragEnd = ({ destination, source, draggableId, type }: any) => {
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = starter.columns[source.droppableId];
    const end = starter.columns[destination.droppableId];

    if (type === "column") {
      const newOrder = [...starter.columnOrder];
      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, draggableId);

      setStarter({
        ...starter,
        columnOrder: newOrder,
      });
      return;
    }

    if (start === end) {
      const column = starter.columns[source.droppableId];
      const taskIds = [...column.taskIds];
      taskIds.splice(source.index, 1);
      taskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...column,
        taskIds,
      };
      setStarter({
        ...starter,
        columns: {
          ...starter.columns,
          [column.id]: newColumn,
        },
      });
      return;
    }

    const startTaskIds = [...start.taskIds];
    const endTaskIds = [...end.taskIds];

    startTaskIds.splice(source.index, 1);
    endTaskIds.splice(destination.index, 0, draggableId);

    const newStartColumn = {
      ...start,
      taskIds: startTaskIds,
    };
    const endTaskColumn = {
      ...end,
      taskIds: endTaskIds,
    };

    setStarter({
      ...starter,
      columns: {
        ...starter.columns,
        [start.id]: newStartColumn,
        [end.id]: endTaskColumn,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-column" type="column" direction="horizontal">
        {(provided, snapshot) => (
          <Container
            // isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {starter.columnOrder.map((columnId: any, index: any) => {
              const column = starter.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId: any) => starter.tasks[taskId]
              );

              return (
                <Column
                  index={index}
                  key={column.id}
                  column={column}
                  tasks={tasks}
                />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DNDTEST;
