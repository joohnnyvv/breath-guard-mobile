import React, { useEffect, useState } from "react";
import { Animated, View } from "react-native";
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
  const [pageAnimations] = useState(pages.map(() => new Animated.Value(0)));

  useEffect(() => {
    pageAnimations.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: index === props.currentPage - 1 ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, [props.currentPage, pageAnimations]);

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
        position: "relative",
        marginTop: 40,
      }}
    >
      {pages.map((page, index) => (
        <Animated.View
          key={page}
          style={{
            backgroundColor: pageAnimations[index].interpolate({
              inputRange: [0, 1],
              outputRange: [
                page < props.currentPage
                  ? Colors[scheme as "dark" | "light"].secondaryBackground
                  : Colors[scheme as "dark" | "light"].text,
                Colors[scheme as "dark" | "light"].accent,
              ],
            }),
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
