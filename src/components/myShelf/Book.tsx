import DropIndicator from "./DropIndicator";
import { motion } from "framer-motion";

type BookProps = BookType & {
  handleDragStart: (event: MouseEvent | TouchEvent | PointerEvent | React.DragEvent<HTMLDivElement>, data: { title: string; id: string; column: string }) => void;
};
  
const Book = ({ title, id, column, handleDragStart }: BookProps) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-brand-light-green dark:border-brand-light-green/10 bg-brand-light-green/5 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-brand-green dark:text-brand-cream">{title}</p>
      </motion.div>
    </>
  );
};

export default Book;