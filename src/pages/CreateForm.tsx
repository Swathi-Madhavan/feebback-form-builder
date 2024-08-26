import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import Root from "../StylesComponents/Root";
import RootCol from "../StylesComponents/RootCol";
import RootRow from "../StylesComponents/RootRow";
import AddFields from "../components/AppBar/AddFields";
import { Stack } from "@mui/material";
import FormArea from "../components/AppBar/FormArea";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import uniqid from "uniqid";
import swapArrayElements from "../components/AppBar/swapArrayElements";
import { FormFieldsType } from "./type";

export interface Item {
  id: string;
  content: string;
  type: "typeA" | "typeB"; // Different types for the items
}

export interface List {
  id: string;
  title: string;
  items: Item[];
}

export const initialLists: List[] = [
  {
    id: "list-1",
    title: "List A",
    items: [
      { id: "item-1", content: "Item 1", type: "typeA" },
      { id: "item-2", content: "Item 2", type: "typeA" },
    ],
  },
  {
    id: "list-2",
    title: "List B",
    items: [
      { id: "item-3", content: "Item 3", type: "typeB" },
      { id: "item-4", content: "Item 4", type: "typeB" },
    ],
  },
];

const fields = [
  { id: "textArea", label: "Textarea", key: "" },
  { id: "numericRating", label: "Numeric rating", key: "" },
  { id: "starRating", label: "Star rating", key: "" },
  { id: "smileyRating", label: "Smiley rating", key: "" },
  { id: "singleLineInput", label: "Single line input", key: "" },
  { id: "radioButton", label: "Radio button", key: "" },
  { id: "categories", label: "Categories", key: "" },
] as Array<FormFieldsType>;

export default function CreateForm() {
  const [droppedItems, setDroppedItems] = useState<Array<FormFieldsType>>([]);

  const location = useLocation();

  console.log("location", location);

  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback(
    (result: DropResult, provided: ResponderProvided) => {
      const { source, destination } = result;
      console.log("result>>>", result);
      if (!destination || result?.reason === "CANCEL") {
        return;
      }

      if (
        source.droppableId === destination.droppableId &&
        destination.droppableId === "form_area" &&
        destination.index !== source.index
      ) {
        console.log("before", droppedItems);
        console.log(
          swapArrayElements(droppedItems, source.index, destination.index) ?? []
        );
        setDroppedItems(
          swapArrayElements(droppedItems, source.index, destination.index) ?? []
        );
      }

      if (
        source.droppableId !== destination.droppableId &&
        destination.droppableId === "form_area"
      ) {
        if (result?.draggableId) {
          const prevData = [...droppedItems];
          const item = fields.find((i) => i.id === result?.draggableId);
          if (item) {
            item.key = uniqid();

            prevData.push(item);
            setDroppedItems(prevData);
          }
        }
      }

      console.log("result", result);
      console.log("provided", provided);
    },
    [droppedItems]
  );

  return (
    <Root
      sx={{
        height: "100%",
      }}
    >
      <CustomAppBar showActionButtons />

      <RootCol>
        <RootRow
          sx={{
            justifyContent: "center",
          }}
        >
          <DragDropContext
            onBeforeCapture={onBeforeCapture}
            onBeforeDragStart={onBeforeDragStart}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
          >
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                height: "100vh",
              }}
            >
              <FormArea lists={droppedItems} />
            </Stack>
            <AddFields lists={fields} />
          </DragDropContext>
        </RootRow>
      </RootCol>
    </Root>
  );
}
