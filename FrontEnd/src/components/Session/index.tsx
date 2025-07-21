import { useEffect, useState } from "react";
import Card from "../Card/Index";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Cookies from "js-cookie";

import {
  BackImage,
  ButtonNewTask,
  ContainerFormTask,
  ContainerTituloSession,
  DivContainerSessions,
  DivSeletion,
  DivSeletionRow,
  DivSession,
  IconPlus,
  InputText,
  InputTextArea,
  Label,
  QuantityTask,
  Select,
  TituloSession,
} from "./style";
import {
  addTaskAxios,
  deleteTaskAxios,
  getTaskById,
  getTasksAxios,
  updatedTaskAxios,
  getTaskAPI,
  updatedTaskAPI,
  createTaskAPI,
  deleteTaskAPI,
  getTaskByIdAPI,
} from "../../api/axios";
import type { Tasks } from "../../types/interfaces";
import ReactModal from "react-modal";
import { useTaskContext } from "../../context/useTaskContex";

ReactModal.setAppElement("#root");

function Session() {
  const { tasks, setTasks } = useTaskContext();

  useEffect(() => {
    getTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [form, setForm] = useState<Tasks>({
    id: "",
    titulo: "",
    description: "",
    relevance: "",
    status: "",
  });
  const [modal, setModal] = useState<boolean>(false);

  async function getTask() {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("RefreshToken");
    if (!token) {
      const result = getTasksAxios();
      return setTasks(result.data);
    }

    try {
      const result = await getTaskAPI(token, refreshToken as string);
      return setTasks(result.data);
    } catch (err: any) {
      throw new Error("Tarefas não encontradas", err.message);
    }
  }

  function addTaskModal() {
    setModal(true);
    setForm({
      id: "",
      titulo: "",
      description: "",
      relevance: "",
      status: "",
    });
    return;
  }

  async function updatedTask() {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("RefreshToken");

    if (!token) {
      const result = updatedTaskAxios(form.id, form);
      setTasks(result);
      setModal(false);
      setForm({
        id: "",
        titulo: "",
        description: "",
        relevance: "",
        status: "",
      });
      return;
    }
    try {
      const result = await updatedTaskAPI(token, refreshToken as string, form);

      setModal(false);
      setForm({
        id: "",
        titulo: "",
        description: "",
        relevance: "",
        status: "",
      });

      return;
    } catch (err: any) {
      throw new Error("Tarefas não encontradas", err.message);
    }
  }

  async function deleteTask(id: string) {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("RefreshToken");

    if (!token) {
      const tasksDelete = deleteTaskAxios(id);
      setTasks(tasksDelete);
      return;
    }

    await deleteTaskAPI(token, refreshToken as string, id);

    return getTask();
  }

  async function addTaskApi() {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("RefreshToken");

    if (!token) {
      const newTask = { ...form, id: (tasks.length + 1).toString() };

      const result = addTaskAxios(newTask);
      setTasks(result);
      setModal(false);
      setForm({
        id: "",
        titulo: "",
        description: "",
        relevance: "",
        status: "",
      });

      return;
    }

    const newTask = { ...form };

    await createTaskAPI(token, refreshToken as string, newTask);
    setModal(false);
    setForm({
      id: "",
      titulo: "",
      description: "",
      relevance: "",
      status: "",
    });

    getTask();
  }

  async function fillForm(id: string) {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("RefreshToken");

    if (!token) {
      const taskUpdate = getTaskById(id);
      if (taskUpdate) {
        setModal(true);
        setForm(taskUpdate);

        return;
      }
    }

    const taskUpdate = await getTaskByIdAPI(
      token as string,
      refreshToken as string,
      id
    );
    setModal(true);

    setForm(taskUpdate.data);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onDragEnd(result: any) {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const sourceList = tasks.filter((t) => t.status === source.droppableId);
    const movedTask = sourceList[source.index];

    if (!movedTask) return;

    const updateTask = { ...movedTask, status: destination.droppableId };

    const newTasks = tasks.filter((i) => i !== movedTask);

    const beforeDestination = newTasks.filter(
      (i) => i.status === destination.droppableId
    );
    const afterDestination = [...beforeDestination];
    afterDestination.splice(destination.index, 0, updateTask);

    const otherTasks = newTasks.filter(
      (i) => i.status !== destination.droppableId
    );

    const finalTasks = [...otherTasks, ...afterDestination];

    setTasks(finalTasks);
  }

  const taskToDo = tasks.filter((item) => item.status === "to_do");
  const taskInProgress = tasks.filter((item) => item.status === "in_progress");
  const taskDone = tasks.filter((item) => item.status === "done");

  const renderSection = (titulo: string, list: Tasks[], statusId: string) => (
    <DivSession>
      <ContainerTituloSession>
        <TituloSession>{titulo}</TituloSession>
        <QuantityTask>{list.length}</QuantityTask>
        <ButtonNewTask onClick={() => addTaskModal()}>
          <IconPlus />
          Nova Tarefa
        </ButtonNewTask>
      </ContainerTituloSession>
      <Droppable droppableId={statusId} type="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item: Tasks, index) => (
              <Card
                key={item.id}
                task={item}
                index={index}
                deleteTasks={deleteTask}
                updatedTask={fillForm}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DivSession>
  );

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <DivContainerSessions>
          {renderSection("Para fazer", taskToDo, "to_do")}
          {renderSection("Em andamento", taskInProgress, "in_progress")}
          {renderSection("Feita", taskDone, "done")}
        </DivContainerSessions>
      </DragDropContext>

      <ReactModal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: "40px",
            borderRadius: "8px",
            background: "none",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <ContainerFormTask>
          <BackImage />
          <div
            style={{
              padding: "20px 20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Label>Titulo</Label>
            <InputText
              type="text"
              value={form.titulo}
              onChange={(e) => setForm({ ...form, titulo: e.target.value })}
            />
            <Label>Descrição</Label>
            <InputTextArea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <DivSeletionRow>
              <DivSeletion>
                <Label>Nível de relevância</Label>
                <Select
                  value={form.relevance}
                  onChange={(e) =>
                    setForm({ ...form, relevance: e.target.value })
                  }
                >
                  <option value=""></option>
                  <option value="importante">Importante</option>
                  <option value="irrelevante">Irrelevante</option>
                  <option value="padrão">Padrão</option>
                </Select>
              </DivSeletion>
              <DivSeletion>
                <Label>Status Tarefa</Label>
                <Select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                  <option value=""></option>
                  <option value="to_do">Pendente</option>
                  <option value="in_progress">Em Andamento</option>
                  <option value="done">Realizada</option>
                </Select>
              </DivSeletion>
            </DivSeletionRow>
            <ButtonNewTask
              style={{ marginTop: "20px", transform: "none" }}
              onClick={() => {
                if (form.id === "") {
                  return addTaskApi();
                } else {
                  return updatedTask();
                }
              }}
            >
              {form.titulo !== ""
                ? "Atualizar Tarefa"
                : "Adicionar nova tarefa"}
            </ButtonNewTask>
          </div>
        </ContainerFormTask>
      </ReactModal>
    </>
  );
}

export default Session;
