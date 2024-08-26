import React from "react";
import { Box } from "@mui/material";
import ColStart from "../../StylesComponents/ColStart";
import FieldCard from "../../uicomponents/FieldCard";
import ShowOn from "./ShowOn";
import { Draggable, Droppable, DroppableProvided } from "react-beautiful-dnd";

interface FormFieldsType {
  id: string;
  label: string;
}

export default function AddFields({
  lists,
}: Readonly<{ lists: FormFieldsType[] }>) {
  return (
    <Box
      sx={{
        width: "317px",
        minWidth: "317px",
        padding: "21px 22px 21px 29px",
        boxShadow: "5px 4px 4px 0 rgba(0, 0, 0, 0.25)",
        backgroundColor: "#fff",
        position: "absolute",
        right: 0,
        height: "100vh",
        marginTop: "-24px",
      }}
    >
      <ColStart
        sx={{
          gap: "14px",
          marginTop: "22px",
          width: "100%",
        }}
      >
        <Droppable droppableId="add_fields" type="dropZone">
          {(provided: DroppableProvided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`list ${
                snapshot.isDraggingOver ? "dragging-over" : ""
              }`}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                cursor: "pointer",
              }}
            >
              {lists.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`item ${item.id} ${
                        snapshot.isDragging ? "dragging" : ""
                      }`}
                    >
                      <FieldCard key={item?.id} {...item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ColStart>
      <ColStart
        sx={{
          gap: "34px",
          marginTop: "50px",
        }}
      >
        <ShowOn uniqueId="url" />
        <ShowOn uniqueId="date" />
        <ShowOn uniqueId="time" />
      </ColStart>
    </Box>
  );
}
