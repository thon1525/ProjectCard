"use client";
import React, { useState } from "react";
import { CardList } from "@/components/atoms";
import { Modal } from "@/components";
import { Card } from "@/components/atoms";
import { FormAdd } from "@/components/atoms";
import { FormUpdate } from "@/components/atoms/form";
import { ValidationForm } from "@/components/atoms/form/ValidationForm";
import { SearchInput } from "@/components/atoms/form/SearchInput";
export interface User {
  id: string;
  username: string;
  profile: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectCard, setSelectCard] = useState("");
  const selectedUser = users.filter((user) => {
    if(user.id === selectCard){
      return user
    }
  })

    const handleDeleteCard = (id: string) => {
      const deleteItem = users.filter((users) => users.id !== id);
      setUsers(deleteItem)
  }

  return (
    <div className="inline-block items-center justify-center mx-auto w-full">
      <SearchInput></SearchInput>
      <CardList onDeleteCard={handleDeleteCard
      } items={users} selectCard={selectCard} onSelectCard={setSelectCard}/>
      <Modal selectCard={selectCard}>
        {selectedUser.length > 0 ? (
          <>
              <FormUpdate selectedUser={selectedUser[0]} updateUser={setUsers} />
          </>
        ) : (
          <>
               <ValidationForm addNewUser={setUsers}/>
          </>
        )}
    
       {/* {selectedUser.length > 0 ? (
          <FormUpdate userData={users} selectCard={selectCard} getValue={selectedUser[0]} />
        ) : (
          <FormAdd addNewUser={setUsers} getValue={{ username: "", profile: "" }} />
        )} */}
     
      </Modal>
    </div>
  );
}
