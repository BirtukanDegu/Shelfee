'use client';

import Board from "@/components/myShelf/Board";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const MyShelf = () => { 
  const state = useSelector((state: RootState) => state.user);

  console.log("User in MyShelf:", state);
  
  return (
    <div className="h-screen scrollbar w-full">
      <Board />
    </div>
  );
};

export default MyShelf;
