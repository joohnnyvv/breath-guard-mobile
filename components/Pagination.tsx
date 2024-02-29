import React from "react";
import { View } from "react-native";
import Colors from "@/constants/Colors/Colors";
import { useColorScheme } from "@/components/useColorScheme";

interface PaginationProps {
  numberOfPages: number;
  currentPage: number;
}

function Pagination(props: PaginationProps) {
  const scheme = useColorScheme();
  const pages = [];
  for (let i = 1; i <= props.numberOfPages; i++) {
    pages.push(i);
  }
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
        position: "relative",
        marginTop: 40,
      }}
    >
      {pages.map((page) => (
        <View
          key={page}
          style={{
            backgroundColor:
              page === props.currentPage
                ? Colors[scheme as "dark" | "light"].accent
                : page < props.currentPage
                ? Colors[scheme as "dark" | "light"].secondaryBackground
                : Colors[scheme as "dark" | "light"].text,
            width: 30,
            height: 10,
            opacity: 0.8,
            borderRadius: 6,
          }}
        />
      ))}
    </View>
  );
}

export default Pagination;
