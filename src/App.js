import {useState} from "react";
import "./App.css";
import Button from "./components/Button/Button";
import FormAddFriend from "./components/addFriendForm/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill/FormSplitBill";
import FriendList from "./components/FriendList/FriendList";
const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];
function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectFriend, setSelectFriend] = useState(null);

    function handleShowFriend() {
        setShowAddFriend((show) => !show);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    function handleSelected(friend) {
        setSelectFriend((curr) => (curr?.id === friend.id ? null : friend));
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        setFriends((friend) =>
            friend.map((friend) =>
                friend.id === selectFriend.id ? {...friend, balance: friend.balance + value} : friend
            )
        );

        setSelectFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendList friends={friends} onSelectFriend={handleSelected} selectFriend={selectFriend} />
                {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
                <Button onClick={handleShowFriend}>{showAddFriend ? "Close" : "Add Friend"}</Button>
            </div>
            {selectFriend && <FormSplitBill selectFriend ={selectFriend} onSplitBill={handleSplitBill} />}
        </div>
    );
}

export default App;
