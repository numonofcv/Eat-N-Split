import React, { useState } from "react";
import Button from "../Button/Button";

export default function FormSplitBill({ selectFriend, onSplitBill }) {
  const name = selectFriend.name;
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaing, setWhoIsPaing] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaing === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♂️Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍🧑{name} Expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤑 Who is plaeying the bill?</label>
      <select
        value={whoIsPaing}
        onChange={(e) => setWhoIsPaing(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
