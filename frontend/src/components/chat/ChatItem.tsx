import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type ChatItemProps = {
  role: "user" | "assistant";
  content: string;
};

// Function to parse a message into blocks of text/code
function parseMessage(message: string) {
  const regex = /```([\w+#-]*)\n([\s\S]*?)```/g;
  const blocks: { type: "code" | "text"; content: string; language?: string }[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(message)) !== null) {
    if (match.index > lastIndex) {
      blocks.push({
        type: "text",
        content: message.slice(lastIndex, match.index),
      });
    }
    blocks.push({
      type: "code",
      content: match[2].trim(),
      language: match[1] || "javascript",
    });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < message.length) {
    blocks.push({
      type: "text",
      content: message.slice(lastIndex),
    });
  }

  return blocks;
}

const ChatItem: React.FC<ChatItemProps> = ({ role, content }) => {
  const isUser = role === "user";
  const blocks = parseMessage(content);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isUser ? "row-reverse" : "row",
        alignItems: "flex-start",
        gap: 2,
        mb: 3,
      }}
    >
      {/* Avatar */}
      <Avatar
        sx={{
          bgcolor: isUser ? "#1976d2" : "#4caf50",
          width: 40,
          height: 40,
        }}
      >
        {isUser ? "U" : "A"}
      </Avatar>

      {/* Message content */}
      <Box
        sx={{
          maxWidth: "80%",
          bgcolor: isUser ? "#e3f2fd" : "#f1f8e9",
          p: 2,
          borderRadius: 2,
          boxShadow: 1,
          wordBreak: "break-word",
        }}
      >
        {blocks.map((block, idx) =>
          block.type === "code" ? (
            <SyntaxHighlighter
              key={idx}
              style={coldarkDark}
              language={block.language}
              customStyle={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            >
              {block.content}
            </SyntaxHighlighter>
          ) : (
            <Typography
              key={idx}
              sx={{
                fontSize: "16px",
                whiteSpace: "pre-wrap",
                color: "#333",
              }}
            >
              {block.content.trim()}
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
};

export default ChatItem;
