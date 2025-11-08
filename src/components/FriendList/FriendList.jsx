import React from "react";
import FriendListItem from "./FriendListItem";

export default function FriendList({friends, onSelectFriend, selectFriend}) {
    return (
        <div>
            <ul>
             {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          friend={friend}               // Faqat friend obyektini yuborish yetarli
          onSelectFriend={onSelectFriend}
          selectFriend={selectFriend}
        />
      ))}
            </ul>
        </div>
    );
}
