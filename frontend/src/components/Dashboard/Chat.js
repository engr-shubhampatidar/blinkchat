import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { useSocket } from "../../services/sockets";
import send from "./../../assets/images/send-icon.png";
import { setTotalMessages } from "../../services/redux/messageReducer";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [previousMessages, setPreviousMessages] = useState([]);
  const [pollingInterval, setPollingInterval] = useState(1000); // Start with 1 second
  const [consecutiveSameCount, setConsecutiveSameCount] = useState(0); // Track consecutive same messages
  const [isFetching, setIsFetching] = useState(false); // Flag to track ongoing API call
  const [lastTimeStamp, setLastTimeStamp] = useState(null); // Initialize lastTimeStamp with null

  const intervalIdRef = useRef(null);

  const { totalMessages } = useSelector((state) => state?.message);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  const { recipientUser } = useSelector((state) => state?.user);

  const socket = useSocket();

  const chatBox = useRef(null);
  // useEffect(() => chatBox.current.scrollIntoView(false), [messages]);

  const scrollBottom = () => {
    if (chatBox?.current && chatBox.current.lastChild) {
      chatBox.current.lastChild.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    if (totalMessages.length > 0) {
      scrollBottom();
    }
  }, [totalMessages]);

  const sendMessage = async () => {
    if (!recipientUser) return; // Ensure recipient is selected
    const message = {
      sender: currentUser._id,
      receiver: recipientUser._id,
      content: newMessage,
    };
    socket.emit("message", message);
    await api.post("/api/messages", message);
    saveMessage(message);
    setNewMessage("");
  };

  const saveMessage = useCallback((message) => {
    // setMessages((prevMessages) => [...prevMessages, message]);
    const updatedTotalMessages = [...totalMessages, message]
    dispatch(setTotalMessages({ totalMessages: updatedTotalMessages }));
    scrollBottom();
  },[dispatch, totalMessages]);

  // Add message event listener only once
  const handleNewMessage = useCallback((message) => {
    saveMessage(message);
  }, [saveMessage]);

  useEffect(() => {
    socket.on("message", handleNewMessage);
    return () => {
      socket.off("message", handleNewMessage);
    };
  }, [handleNewMessage, socket]);

  useEffect(() => {
    if (currentUser && currentUser._id)
      socket.emit("joinRoom", currentUser._id);
  }, [currentUser, currentUser._id, socket]);

  function isPhone() {
    const userAgent = window.navigator.userAgent;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Check if user agent contains "Android" or "iPhone" and if screen width is smaller than a certain threshold
    return (
      /Android|iPhone/.test(userAgent) &&
      (screenWidth < 768 || screenHeight < 768)
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/api/messages/${currentUser?._id}/${recipientUser?._id}`
        );
        const newMessages = response?.data; // Assuming your API response has a "messages" property

        if (JSON.stringify(newMessages) !== JSON.stringify(previousMessages)) {
          // setMessages(newMessages);
          dispatch(setTotalMessages({ totalMessages: newMessages }));
          setPreviousMessages(newMessages);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setIsFetching(false); // Reset flag after API call finishes
      }
    };

    if (recipientUser) {
      fetchData();
    }
  }, [currentUser?._id, dispatch, isFetching, previousMessages, recipientUser]);

  if (totalMessages?.length < 0) {
    return null;
  }

  let lastDisplayedDate = null; // Initialize lastDisplayedDate to null

  return (
    <>
      <div
        className={`flex flex-col px-2 overflow-y-auto no-scrollbar h-4/5`}
        ref={chatBox}
      >
        {totalMessages.map((message, index) => {
          const messageDate = new Date(message.timestamp).toLocaleDateString();

          // Check if the message date is different from the last displayed date
          const shouldDisplayDate = messageDate !== lastDisplayedDate;

          // Update lastDisplayedDate if it's different from the message date
          if (shouldDisplayDate) {
            lastDisplayedDate = messageDate;
          }

          return (
            <>
              {shouldDisplayDate && (
                <p
                  className={`w-auto h-auto mb-1 ml-2 text-gray-400 text-[8px] ${
                    message.sender === currentUser._id
                      ? "self-center"
                      : "self-center"
                  }`}
                >
                  {new Date(message?.timestamp).toLocaleDateString()}
                </p>
              )}
              <div
                key={message._id}
                className={`rounded-lg h-auto p-2 max-w-xl max-sm:max-w-52 break-all mt-2 flex flex-row ${
                  message.sender === currentUser._id
                    ? "bg-blue-200  self-end text-left"
                    : "bg-gray-300 self-start text-left"
                }`}
                // {`${messages?.length - 1 === index ? "mb-8" : ""}`}
                // ref={messages?.length - 1 === index ? null : null}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              {message?.timestamp && (
                <p
                  className={`w-auto  h-auto mb-1 ml-2 text-gray-400 text-[8px] ${
                    message.sender === currentUser._id
                      ? "self-end text-left"
                      : "self-start text-left"
                  }`}
                >
                  {new Date(message?.timestamp).toLocaleTimeString([], {
                    hour12: true,
                  })}
                </p>
              )}
            </>
          );
        })}
        {/* <div className="p-1 m-1">
          <p>{isFetching ? "Fetching messages...." : "All messages are loaded"}</p>
        </div> */}
      </div>
    </>
  );
};
