import React, { useState } from "react";
import { ScrollView, View, useColorScheme, Dimensions } from "react-native";
import AgeAndGender from "@/components/PredictionFormPages/AgeAndGender";
import Pagination from "@/components/Pagination";
import AssessingForm from "../../components/PredictionFormPages/AssessingForm";
import { AirPollutionInfo } from "@/constants/PredictionFormInfo/PredictionFormInfo";
import NavButtons from "@/components/PredictionFormPages/NavButtons/NavButtons";

function PredictionFormPage() {
  const [userData, setUserData] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const colorScheme = useColorScheme();
  const windowHeight = Dimensions.get("window").height;
  const footerSpace = 320;

  const updateUserData = (dataInfo: { index: number; value: number }) => {
    setUserData((prevUserData) => {
      const newUserData = [...prevUserData];
      newUserData[dataInfo.index] = dataInfo.value;
      return newUserData;
    });
  };

  const toNextPage = () => {
    if (currentPage < 7) {
      setCurrentPage(currentPage + 1);
    } else {
      return;
    }
    console.log(userData);
  };

  const toPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      return;
    }
  };

  return (
    <View>
      <ScrollView
        style={{
          paddingTop: 40,
          paddingHorizontal: 20,
          gap: 40,
          height: windowHeight - footerSpace,
        }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
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
      </ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavButtons
          colorScheme={colorScheme}
          isBackButtonVisible={currentPage !== 1}
          onSubmit={toNextPage}
          toPrevPage={toPreviousPage}
        />
        <Pagination numberOfPages={7} currentPage={currentPage} />
      </View>
    </View>
  );
}

export default PredictionFormPage;
