import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import Root from "../StylesComponents/Root";
import RootCol from "../StylesComponents/RootCol";
import RootRow from "../StylesComponents/RootRow";
import AddFields from "../components/AppBar/AddFields";
import { Button, Stack } from "@mui/material";
import FormArea from "../components/AppBar/FormArea";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import uniqid from "uniqid";
import swapArrayElements from "../components/AppBar/swapArrayElements";
import {
  BuilderFormType,
  DynamicFormStruct,
  EditFormOptionDataTypes,
  FormFieldsType,
} from "./type";
import CustomModal from "../components/AppBar/CustomModal";
import CutsomTypography from "../StylesComponents/CutsomTypography";
import { FormProvider, useForm } from "react-hook-form";
import formTitleMapper from "../uicomponents/formTitleMapper";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { setListOfAvailableForms } from "../Store/slice/listofForms";
import { useLocation, useNavigate } from "react-router-dom";
import {
  changeNavBarPublishBtnState,
  changeNavBarSaveBtnState,
} from "../Store/slice/navBarSlice";
import localforage from "localforage";

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
  { id: "textArea", label: "Textarea", uniqueKey: "" },
  { id: "numericRating", label: "Numeric rating", uniqueKey: "" },
  { id: "starRating", label: "Star rating", uniqueKey: "" },
  { id: "smileyRating", label: "Smiley rating", uniqueKey: "" },
  { id: "singleLineInput", label: "Single line input", uniqueKey: "" },
  { id: "radioButton", label: "Radio button", uniqueKey: "" },
  { id: "categories", label: "Categories", uniqueKey: "" },
] as Array<FormFieldsType>;

export default function CreateForm() {
  const location = useLocation();
  const [droppedItems, setDroppedItems] = useState<Array<BuilderFormType>>(
    location?.state?.formElements ?? []
  );
  const [editingItem, setEditingItem] = useState<BuilderFormType | null>(null);
  const [showEditFlow, setShowEditFlow] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [deleteKey, setDeleteKey] = useState<string>("");
  const [formLabel, setFormLabel] = useState<string | undefined>("");
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");
  const [isRequired, setIsRequired] = React.useState(true);

  const [editFormOptionData, setEditFormOptionData] =
    useState<EditFormOptionDataTypes>({});

  const dispatch = useAppDispatch();
  const handleChangeRequired = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRequired(event.target.checked);
  };

  const labelChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    setFormLabel(e?.target?.value);
  };

  const navigate = useNavigate();

  const errorChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    setErrorMsg(e?.target?.value);
  };

  const handleFormOptionsCHhange = (
    index: any,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    const clonedData = { ...editFormOptionData };
    if (index in clonedData) {
      clonedData[index] = e?.target?.value ?? "";
      setEditFormOptionData(clonedData);
    }
  };

  const {
    navBar,
    listOfForms,
    form: formRedux,
  } = useAppSelector((state) => state);

  const { publishFormData, saveFormData } = navBar;
  const { forms } = listOfForms;

  const form = useForm<DynamicFormStruct>({
    defaultValues: location?.state ?? {
      showBasedonUrl: true,
      showOnDate: true,
      showOnTime: true,
      formElements: [],
      formName: formRedux?.formName,
      formId: formRedux?.formId,
    },
  });

  const handlePrepareData = useCallback(() => {
    const data: DynamicFormStruct = form.getValues();
    data.formElements = droppedItems;
    return data;
  }, [droppedItems, form]);

  const saveData = useCallback(async () => {
    const oldForms = [...forms];
    const newFormData = handlePrepareData();
    const matchedIndex = oldForms.findIndex(
      (row) => row.formId === newFormData.formId
    );

    if (matchedIndex >= 0) {
      oldForms.splice(matchedIndex, 1, newFormData);
    } else {
      oldForms.push(newFormData);
    }
    dispatch(setListOfAvailableForms(oldForms));

    if (publishFormData) {
      localforage.setItem("formBuilder", JSON.stringify(newFormData));
      dispatch(changeNavBarPublishBtnState(false));
    }
    dispatch(changeNavBarSaveBtnState(false));
    navigate("/");
  }, [dispatch, forms, handlePrepareData, navigate, publishFormData]);

  useMemo(() => {
    if (publishFormData || saveFormData) {
      saveData();
    }
  }, [publishFormData, saveData, saveFormData]);

  const onDragEnd = useCallback(
    (result: DropResult, provided: ResponderProvided) => {
      const { source, destination } = result;
      if (!destination || result?.reason === "CANCEL") {
        return;
      }

      if (
        source.droppableId === destination.droppableId &&
        destination.droppableId === "form_area" &&
        destination.index !== source.index
      ) {
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
            item.uniqueKey = uniqid();
            const data: BuilderFormType = {
              ...item,
              state: {
                label: formTitleMapper(item.id),
                isCategories: item.id === "categories",
                isRadioGrp: item.id === "radioButton",
                isRequired: false,
                placeHolder: "",
                userEnteredValue: "",
                categoriesOptions:
                  item.id === "categories"
                    ? [
                        {
                          label: "Bug",
                          value: "bug",
                        },
                        {
                          label: "Content",
                          value: "Content",
                        },
                        {
                          label: "Other",
                          value: "Other",
                        },
                      ]
                    : [],
                errorMessage: "",
                radioGrpOptions:
                  item.id === "radioButton"
                    ? [
                        {
                          label: "Radio 1",
                          value: "radio1",
                        },
                        {
                          label: "Radio 2",
                          value: "radio2",
                        },
                        {
                          label: "Radio 3",
                          value: "radio3",
                        },
                      ]
                    : [],
              },
            };

            prevData.push(data);
            setDroppedItems(prevData);
          }
        }
      }
    },
    [droppedItems]
  );

  const handleEditCallBack = useCallback(
    (key: string) => {
      const prevDroppedItems = [...droppedItems];
      const filteredItems =
        prevDroppedItems?.find((item) => item.uniqueKey === key) ?? null;
      if (filteredItems) {
        setEditingItem(filteredItems);
        let struct: EditFormOptionDataTypes = {};
        if (editingItem?.state?.isCategories) {
          editingItem?.state?.categoriesOptions?.forEach((item, index) => {
            struct[index] = item.label;
          });
        }
        if (editingItem?.state?.isRadioGrp) {
          editingItem?.state?.radioGrpOptions?.forEach((item, index) => {
            struct[index] = item.label;
          });
        }
        setEditFormOptionData(struct);
        setShowEditFlow(true);
        setFormLabel(editingItem?.state.label);
        setErrorMsg(editingItem?.state?.errorMessage);
        setIsRequired(editingItem?.state?.isRequired ?? false);
        window.scrollTo(0, 0);
      }
    },
    [
      droppedItems,
      editingItem?.state?.categoriesOptions,
      editingItem?.state?.errorMessage,
      editingItem?.state?.isCategories,
      editingItem?.state?.isRadioGrp,
      editingItem?.state?.isRequired,
      editingItem?.state.label,
      editingItem?.state?.radioGrpOptions,
    ]
  );

  const handleDeleteCallBack = useCallback((key: string) => {
    setDeleteKey(key);
    setShowDeleteModal(true);
  }, []);

  const closeModal = useCallback(
    (isDelete?: boolean) => {
      setShowDeleteModal(false);
      if (isDelete) {
        const prevDroppedItems = [...droppedItems];

        const filteredItems = prevDroppedItems.filter(
          (item) => item.uniqueKey !== deleteKey
        );
        setDroppedItems(filteredItems);
        setDeleteKey("");
      }
    },
    [deleteKey, droppedItems]
  );

  const onSaveCloseEdit = (isSaveSubmit: boolean) => {
    if (isSaveSubmit) {
      const id = editingItem?.uniqueKey;
      const prev = [...droppedItems];
      const matchedIndex = prev?.findIndex((row) => row.uniqueKey === id);
      if (matchedIndex >= 0) {
        const updateObj = prev[matchedIndex];
        updateObj.state.label = formLabel ?? "";
        updateObj.state.isRequired = isRequired;
        updateObj.state.errorMessage = errorMsg;
        if (updateObj.state.isCategories) {
          updateObj.state.categoriesOptions = Object.values(editFormOptionData);
        }
        if (updateObj.state.isRadioGrp) {
          updateObj.state.radioGrpOptions = Object.values(editFormOptionData);
        }
        prev.splice(matchedIndex, 1, updateObj);
        setDroppedItems(prev);
      }
    }
    setEditingItem(null);
    setShowEditFlow(false);
  };

  return (
    <FormProvider {...form}>
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
            <DragDropContext onDragEnd={onDragEnd}>
              <Stack
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: "100vh",
                }}
              >
                <FormArea
                  lists={droppedItems}
                  handleEditCallBack={handleEditCallBack}
                  handleDeleteCallBack={handleDeleteCallBack}
                />
              </Stack>
              <AddFields
                lists={fields}
                editItem={editingItem}
                showEdit={showEditFlow}
                labelChangeHandler={labelChangeHandler}
                formLabel={formLabel}
                handleChangeRequired={handleChangeRequired}
                isRequired={isRequired}
                errorChangeHandler={errorChangeHandler}
                errorMsg={errorMsg}
                onSaveCloseEdit={onSaveCloseEdit}
                editFormOptionData={editFormOptionData}
                handleFormOptionsCHhange={handleFormOptionsCHhange}
              />
            </DragDropContext>
          </RootRow>
        </RootCol>
        <CustomModal open={showDeleteModal} handleCloseCallBack={closeModal}>
          <CutsomTypography
            sx={{
              fontSize: "20px",
              fontweight: "500",
              lineHeight: "1.6",
              letterSpacing: "0.15px",
              color: "#000000de",
              width: "100%",
            }}
          >
            Do you want to delete ?
          </CutsomTypography>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Button
              sx={{
                fontFamily: "Roboto",
                fontSize: "14px",
                fontweight: "500",
                lineHeight: "1.7",
                letterSpacing: "0.4px",
                color: "#189657 !important",
                padding: "6px 8px",
                borderRadius: "4px",
                backgroundColor: "#fff !important",
              }}
              onClick={() => closeModal(true)}
            >
              Delete
            </Button>
            <Button
              sx={{
                fontFamily: "Roboto",
                fontSize: "14px",
                fontweight: "500",
                lineHeight: "1.7",
                letterSpacing: "0.4px",
                color: "#19191957 !important",
                padding: "6px 8px",
                borderRadius: "4px",
                backgroundColor: "#fff !important",
              }}
              onClick={() => closeModal(false)}
            >
              Cancel
            </Button>
          </Stack>
        </CustomModal>
      </Root>
    </FormProvider>
  );
}
