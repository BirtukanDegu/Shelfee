declare interface BookType {
  title: string;
  id: string;
  column: ColumnType;
};

declare type ColumnType = "wishlist" | "que" | "doing" | "done";