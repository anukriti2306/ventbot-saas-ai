import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../context/AuthContext";

const ChatItem = ({
  content,
  role
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const auth = useAuth();

  const getInitials = (name?: string) => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    const firstInitial = parts[0]?.[0] || "";
    const secondInitial = parts[1]?.[0] || "";
    return (firstInitial + secondInitial).toUpperCase();
  };

  const isUser = role === "user";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isUser ? "row-reverse" : "row",
        alignItems: "flex-start",
        gap: 2,
        my: 1.5
      }}
    >
      {/* Avatar */}
      {isUser ? (
        <Avatar
          sx={{
            bgcolor: "black",
            color: "white",
            fontWeight: 700,
            width: 40,
            height: 40
          }}
        >
          {getInitials(auth?.user?.name) || "U"}
        </Avatar>
      ) : (
        <Avatar
          sx={{
            bgcolor: "white",
            width: 40,
            height: 40,
            p: 0.5 // padding to "zoom out" the logo
          }}
        >
          <img
            src="/openai.png"
            alt="assistant"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }}
          />
        </Avatar>
      )}

      {/* Message bubble */}
      <Box
        sx={{
          bgcolor: isUser ? "#007b8a" : "#004d5612",
          color: isUser ? "white" : "black",
          borderRadius: 2,
          px: 2,
          py: 1.2,
          maxWidth: "70%",
          fontFamily: "Work Sans",
          boxShadow: isUser
            ? "0 1px 3px rgba(0,0,0,0.2)"
            : "0 1px 3px rgba(0,0,0,0.1)"
        }}
      >
        <Typography sx={{ fontSize: "16px", lineHeight: 1.5 }}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
