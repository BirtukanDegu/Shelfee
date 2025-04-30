declare interface AuthDataType {
  username?: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

declare interface BookType {
  title: string;
  id: string;
  column: ColumnType;
};

declare type ColumnType = "wishlist" | "que" | "doing" | "done";