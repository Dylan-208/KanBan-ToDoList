/* eslint-disable @typescript-eslint/no-explicit-any */
import { CirculeRelevance } from "../Header/style";
import {
  ContainerCard,
  ContainerStatus,
  ContainerTitulo,
  Description,
  IconDelete,
  IconToDo,
  InfoCard,
  LineProgression,
  TituloCard,
} from "./style";
import type { Tasks } from "../../types/interfaces";
import { Draggable } from "@hello-pangea/dnd";

interface CardProps {
  task: Tasks;
  index: number;
  deleteTasks: any;
  updatedTask: any;
}

function Card({ task, index, deleteTasks, updatedTask }: CardProps) {
  return (
    <>
      <Draggable draggableId={task.id as string} index={index}>
        {(provided) => (
          <ContainerCard
            key={task.id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ContainerTitulo>
              <CirculeRelevance $relevance={task.relevance} />
              <TituloCard>{task.titulo}</TituloCard>
              <IconDelete onClick={() => deleteTasks(task.id)} />
            </ContainerTitulo>
            <InfoCard>
              <Description>{task.description}</Description>
              <LineProgression
                $relevance={task.relevance}
                $status={task.status}
              />
            </InfoCard>
            <ContainerStatus>
              <IconToDo onClick={() => updatedTask(task.id)} />
            </ContainerStatus>
          </ContainerCard>
        )}
      </Draggable>
    </>
  );
}

export default Card;
