import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import AgeAndGender from "@/components/PredictionFormPages/AgeAndGender";
import Pagination from "@/components/Pagination";
import CustomSlider from "@/components/CustomSlider";

function PredictionFormPage() {
  const [userData, setUserData] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const updateUserData = (userData: number[]) => {
    setUserData(userData);
  };
  const toNextPage = () => {
    if (currentPage < 7) {
      setCurrentPage(currentPage + 1);
    } else {
      return;
    }
  };

  const toPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 40,
          paddingBottom: 30,
          paddingHorizontal: 20,
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        {currentPage === 1 ? (
          <AgeAndGender
            toNextPage={toNextPage}
            updateUserData={updateUserData}
            userData={userData}
          />
        ) : (
          <View></View>
        )}
        <Pagination numberOfPages={7} currentPage={currentPage} />
        <CustomSlider />
      </View>
    </ScrollView>
  );
}

export default PredictionFormPage;
