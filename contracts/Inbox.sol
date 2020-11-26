pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    //Old way of creating constructor function
        //In newer versions constructor keyword used.
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}