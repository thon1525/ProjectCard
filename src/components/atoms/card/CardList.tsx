import React, { useState } from "react";
import { Card } from "./Card";
import { User } from "@/app/page";

interface CardListProps {
  items: User[];
  selectCard: string;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
  onDeleteCard: (id: string) => void;
}

const CardList = ({ items, selectCard, onSelectCard, onDeleteCard }: CardListProps) => {

  return (
    <div>
      {items.map((item, index) => (
        <Card
          id={item.id}
          name={item.username}
          key={item.id || index}
          image={item.profile}
          onSelectCard={onSelectCard}
          selectCard={selectCard}
          onDeleteCard={onDeleteCard}
        >
        {/* <button>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="15"
            height="15"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              d="M35.4,38.8c-3.2,2.4-7.1,3.9-11.4,3.9C13.7,42.7,5.3,34.3,5.3,24c0-2.6,0.6-5.2,1.5-7.4"
            ></path>
            <path
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
              d="M12.1,9.6C15.3,7,19.5,5.3,24,5.3c10.3,0,18.7,8.4,18.7,18.7c0,2.3-0.4,4.5-1.2,6.6"
            ></path>
            <line
              x1="31.1"
              x2="16.9"
              y1="16.9"
              y2="31.1"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
            ></line>
            <line
              x1="31.1"
              x2="16.9"
              y1="31.1"
              y2="16.9"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="3"
            ></line>
          </svg>
        </i>
        </button> */}
        </Card>
      ))}
    </div>
  );
};

export { CardList };
