import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import AgeAndGender from "@/components/PredictionFormPages/AgeAndGender";
import Pagination from "@/components/Pagination";
import AssessingForm from "./AssessingForm";
import { AirPollutionInfo } from "@/constants/PredictionFormInfo/PredictionFormInfo";

function PredictionFormPage() {
  const [userData, setUserData] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const updateUserData = (dataInfo: { index: number; value: number }) => {
    setUserData((prevUserData) => {
      const newUserData = [...prevUserData];
      newUserData[dataInfo.index] = dataInfo.value;
      return newUserData;
    });
    console.log(userData);
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
          <AgeAndGender updateUserData={updateUserData} />
        ) : (
          <AssessingForm
            question={AirPollutionInfo.question}
            labelMin={AirPollutionInfo.labelMin}
            labelMax={AirPollutionInfo.labelMax}
          />
        )}
        <Pagination numberOfPages={7} currentPage={currentPage} />
      </View>
    </ScrollView>
  );
}

export default PredictionFormPage;
