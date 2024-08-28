import React, { ChangeEvent } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import ColStart from "../../StylesComponents/ColStart";
import FieldCard from "../../uicomponents/FieldCard";
import ShowOn from "./ShowOn";
import { Draggable, Droppable, DroppableProvided } from "react-beautiful-dnd";
import BackIconForm from "../../assets/icons/BackIconForm";
import { BuilderFormType, EditFormOptionDataTypes } from "../../pages/type";
import RowStart from "../../StylesComponents/RowStart";
import BlueButton from "../../StylesComponents/BlueButton";

interface FormFieldsType {
  id: string;
  label: string;
}

export default function AddFields({
  lists,
  showEdit,
  labelChangeHandler,
  formLabel,
  handleChangeRequired,
  isRequired,
  errorChangeHandler,
  errorMsg,
  onSaveCloseEdit,
  editFormOptionData,
  handleFormOptionsCHhange,
  editItem,
}: Readonly<{
  lists: FormFieldsType[];
  editItem: BuilderFormType | null;
  showEdit: boolean;
  formLabel: string | undefined;
  errorMsg: string | undefined;
  isRequired: boolean;
  labelChangeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => void;
  errorChangeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => void;
  handleChangeRequired: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveCloseEdit: (isSaveSubmit: boolean) => void;
  editFormOptionData: EditFormOptionDataTypes;
  handleFormOptionsCHhange: (
    index: any,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => void;
}>) {
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
      {showEdit ? (
        <ColStart
          sx={{
            width: "100%",
          }}
          key={editItem?.uniqueKey ?? ""}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Button onClick={() => onSaveCloseEdit(false)}>
              <BackIconForm />
              <Typography
                sx={{
                  color: "#4b4949",
                  fontFamily: "Roboto",
                  lineHeight: "1.6",
                  letterSpacing: "0.15px",
                  fontWeight: 600,
                }}
              >
                Back to Add Fields
              </Typography>
            </Button>
          </Stack>
          <ColStart sx={{ marginTop: "23px", gap: "16px", width: "100%" }}>
            <TextField
              id="standard-basic"
              label="Label"
              variant="standard"
              sx={{ width: "100%" }}
              value={formLabel}
              onChange={labelChangeHandler}
            />
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  checked={isRequired}
                  onChange={handleChangeRequired}
                />
              }
              label="Required"
            />
            <TextField
              id="standard-basic"
              label="Error message"
              variant="standard"
              sx={{ width: "100%" }}
              value={errorMsg}
              onChange={errorChangeHandler}
            />
          </ColStart>

          <ColStart sx={{ marginTop: "24px" }}>
            <Typography
              sx={{
                color: "#3F3939",
                fontFamily: "Roboto",
                lineHeight: "26px",
                letterSpacing: "0.46px",
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              Options
              {Object.keys(editFormOptionData).map((item: any, index) => (
                <TextField
                  key={item + index}
                  id="standard-basic"
                  label=""
                  variant="standard"
                  sx={{ width: "100%" }}
                  value={editFormOptionData[item]}
                  onChange={(e) => handleFormOptionsCHhange(index, e)}
                />
              ))}
            </Typography>
          </ColStart>
          <RowStart
            sx={{ gap: "16px", alignItems: "center", marginTop: "40px" }}
          >
            <BlueButton onClick={() => onSaveCloseEdit(true)}>Save</BlueButton>
            <Button
              sx={{
                padding: "8px 22px",
                boxShadow:
                  "0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
                color: "#000 !important",
                backgroundColor: "#f5f5f5 ",
              }}
              onClick={() => onSaveCloseEdit(false)}
            >
              Cancel
            </Button>
          </RowStart>
        </ColStart>
      ) : (
        <>
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
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
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
            <ShowOn
              uniqueId="url"
              switchHandlerName="showBasedonUrl"
              label="Show based on URL conditions"
            />
            <ShowOn
              uniqueId="date"
              switchHandlerName="showOnDate"
              label="Show on a specific date"
            />
            <ShowOn
              uniqueId="time"
              switchHandlerName="showOnTime"
              label="Show on a specific time"
            />
          </ColStart>
        </>
      )}
    </Box>
  );
}
