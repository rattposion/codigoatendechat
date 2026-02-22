import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { AuthContext } from "../../context/Auth/AuthContext";
import { useDate } from "../../hooks/useDate";
import api from "../../services/api";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    flex: 1,
    overflow: "hidden",
    borderRadius: 0,
    height: "100%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
  },
  messageList: {
    position: "relative",
    overflowY: "auto",
    height: "100%",
    ...theme.scrollbarStyles,
    backgroundColor: theme.palette.chatlist,
    padding: theme.spacing(2),
  },
  inputArea: {
    position: "relative",
    height: "auto",
  },
  input: {
    padding: "20px",
  },
  buttonSend: {
    margin: theme.spacing(1),
  },
  boxLeft: {
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    maxWidth: 360,
    borderRadius: theme.shape.borderRadius * 2,
    borderBottomLeftRadius: theme.shape.borderRadius,
    border: "1px solid rgba(0, 0, 0, 0.08)",
    boxShadow: theme.shadows[1],
  },
  boxRight: {
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    marginLeft: "auto",
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: "right",
    maxWidth: 360,
    borderRadius: theme.shape.borderRadius * 2,
    borderBottomRightRadius: theme.shape.borderRadius,
    border: "1px solid rgba(0, 0, 0, 0.08)",
    boxShadow: theme.shadows[2],
  },
}));

export default function ChatMessages({
  chat,
  messages,
  handleSendMessage,
  handleLoadMore,
  scrollToBottomRef,
  pageInfo,
  loading,
}) {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const { datetimeToClient } = useDate();
  const baseRef = useRef();

  const [contentMessage, setContentMessage] = useState("");

  const scrollToBottom = () => {
    if (baseRef.current) {
      baseRef.current.scrollIntoView({});
    }
  };

  const unreadMessages = (chat) => {
    if (chat !== undefined) {
      const currentUser = chat.users.find((u) => u.userId === user.id);
      return currentUser.unreads > 0;
    }
    return 0;
  };

  useEffect(() => {
    if (unreadMessages(chat) > 0) {
      try {
        api.post(`/chats/${chat.id}/read`, { userId: user.id });
      } catch (err) {}
    }
    scrollToBottomRef.current = scrollToBottom;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = (e) => {
    const { scrollTop } = e.currentTarget;
    if (!pageInfo.hasMore || loading) return;
    if (scrollTop < 600) {
      handleLoadMore();
    }
  };

  return (
    <Paper className={classes.mainContainer}>
      <div onScroll={handleScroll} className={classes.messageList}>
        {Array.isArray(messages) &&
          messages.map((item, key) => {
            if (item.senderId === user.id) {
              return (
                <Box key={key} className={classes.boxRight}>
                  <Typography variant="subtitle2">
                    {item.sender.name}
                  </Typography>
                  {item.message}
                  <Typography variant="caption" display="block">
                    {datetimeToClient(item.createdAt)}
                  </Typography>
                </Box>
              );
            } else {
              return (
                <Box key={key} className={classes.boxLeft}>
                  <Typography variant="subtitle2">
                    {item.sender.name}
                  </Typography>
                  {item.message}
                  <Typography variant="caption" display="block">
                    {datetimeToClient(item.createdAt)}
                  </Typography>
                </Box>
              );
            }
          })}
        <div ref={baseRef}></div>
      </div>
      <div className={classes.inputArea}>
        <FormControl variant="outlined" fullWidth>
          <Input
            multiline
            value={contentMessage}
            onKeyUp={(e) => {
              if (e.key === "Enter" && contentMessage.trim() !== "") {
                handleSendMessage(contentMessage);
                setContentMessage("");
              }
            }}
            onChange={(e) => setContentMessage(e.target.value)}
            className={classes.input}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    if (contentMessage.trim() !== "") {
                      handleSendMessage(contentMessage);
                      setContentMessage("");
                    }
                  }}
                  className={classes.buttonSend}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </Paper>
  );
}
