// App.tsx
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import './styles.css'; // Make sure to add your styles

// types.ts
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

const initialLists: List[] = [
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

const App: React.FC = () => {
  const [lists, setLists] = useState<List[]>(initialLists);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) return;

    // Handle reordering within the same list
    if (source.droppableId === destination.droppableId) {
      const listId = source.droppableId;
      const list = lists.find((l) => l.id === listId);
      if (!list) return;

      const updatedItems = Array.from(list.items);
      const [movedItem] = updatedItems.splice(source.index, 1);
      updatedItems.splice(destination.index, 0, movedItem);

      const updatedLists = lists.map((l) =>
        l.id === listId ? { ...l, items: updatedItems } : l
      );
      setLists(updatedLists);
    } else {
      // Handle moving between lists
      const sourceList = lists.find((l) => l.id === source.droppableId);
      const destinationList = lists.find(
        (l) => l.id === destination.droppableId
      );
      if (!sourceList || !destinationList) return;

      const [movedItem] = sourceList.items.splice(source.index, 1);
      movedItem.type = "typeB"; // Change type when moved to List B
      destinationList.items.splice(destination.index, 0, movedItem);

      setLists(
        lists.map((l) =>
          l.id === source.droppableId
            ? { ...l, items: sourceList.items }
            : l.id === destination.droppableId
            ? { ...l, items: destinationList.items }
            : l
        )
      );
    }
  };

  const handleInputChange = (
    listId: string,
    itemId: string,
    newContent: string
  ) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        const updatedItems = list.items.map((item) =>
          item.id === itemId ? { ...item, content: newContent } : item
        );
        return { ...list, items: updatedItems };
      }
      return list;
    });
    setLists(updatedLists);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {lists.map((list) => (
        <Droppable key={list.id} droppableId={list.id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`list ${
                snapshot.isDraggingOver ? "dragging-over" : ""
              }`}
            >
              <h2>{list.title}</h2>
              {list.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                        width: "100%",
                      }}
                    >
                      <input
                        type="text"
                        value={item.content}
                        onChange={(e) =>
                          handleInputChange(list.id, item.id, e.target.value)
                        }
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default App;
