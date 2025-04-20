declare interface BookType {
  title: string;
  id: string;
  column: ColumnType;
};

declare type ColumnType = "backlog" | "que" | "doing" | "done";