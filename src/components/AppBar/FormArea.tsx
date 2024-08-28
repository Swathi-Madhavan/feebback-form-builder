import React, { useCallback } from "react";
import { Box } from "@mui/material";
import FormTitle from "./FormTitle";
import { Draggable, Droppable } from "react-beautiful-dnd";
import FormItem from "../../uicomponents/FormItem";
import { BuilderFormType } from "../../pages/type";

export default function FormArea({
  lists,
  handleDeleteCallBack,
  handleEditCallBack,
}: Readonly<{
  lists: Array<BuilderFormType>;
  handleDeleteCallBack: (key: string) => void;
  handleEditCallBack: (key: string) => void;
}>) {
  const onDelete = useCallback(
    (key: string) => {
      handleDeleteCallBack(key);
    },
    [handleDeleteCallBack]
  );

  const onEdit = useCallback(
    (key: string) => {
      handleEditCallBack(key);
    },
    [handleEditCallBack]
  );

  return (
    <Box
      sx={{
        top: "200px",
        minWidth: "500px",
        maxHeight: "752px",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
        bgcolor: "#FFF",
        overflowY: "auto",
      }}
    >
      <FormTitle />
      <Droppable droppableId="form_area" type="dropZone">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`list ${snapshot.isDraggingOver ? "dragging-over" : ""}`}
            style={{
              minWidth: "500px",
              minHeight: "752px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              cursor: "pointer",
              border: snapshot.isDraggingOver ? "1px dashed #5578f4" : "none",
              margin: "24px",
            }}
          >
            {lists.map((item, index) => (
              <Draggable
                key={item.uniqueKey}
                draggableId={item.uniqueKey}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`item ${item.id} ${
                      snapshot.isDragging ? "dragging" : ""
                    }`}
                  >
                    <FormItem onEdit={onEdit} onDelete={onDelete} {...item} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Box>
  );
}
