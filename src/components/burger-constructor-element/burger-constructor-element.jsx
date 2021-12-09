import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import burgerConstructorElementStyles from "./burger-constructor-element.module.css";

import {
  deleteIngredient,
  moveIngredients,
} from "../../services/actions/burger-constructor";

export const BurgerConstructorElement = ({ name, price, image, index, id }) => {
  const dispatch = useDispatch();
  const handleDeletingIngredient = () => {
    dispatch(deleteIngredient(index));
  };

  const [{ isDrag }, drag] = useDrag({
    type: "chosenIngredient",
    item: { index: index },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "chosenIngredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      dispatch(moveIngredients(dragIndex, hoverIndex));
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const draggingElementClassName = `${burgerConstructorElementStyles.element} ${
    isDrag && burgerConstructorElementStyles.onDrugging
  }`;

  const ref = useRef(null);
  drag(drop(ref));

  return (
    <div
      className={burgerConstructorElementStyles.dpopTarget}
      ref={ref}
      key={index}
    >
      <div className={draggingElementClassName} ref={ref} key={index + 2}>
        <div
          className={burgerConstructorElementStyles.dragIcon + " mr-3"}
          key={index + 3}
        >
          <DragIcon type="primary" key={index + 4} />
        </div>

        <ConstructorElement
          text={name}
          price={price}
          thumbnail={image}
          handleClose={handleDeletingIngredient}
          key={index + 5}
        />
      </div>
    </div>
  );
};
