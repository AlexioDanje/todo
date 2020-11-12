export class Todo {
  title: string;
  id: number;
  description: string;
  dueDate: Date; //check type
  status: StatusEnum;
}

export enum StatusEnum {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
