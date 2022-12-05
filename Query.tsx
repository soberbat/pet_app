import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ITEMS } from "./utils/gqlQuery";

interface Query {
  setQueryData: (data: any) => void;
}

export default function Query({ setQueryData }: Query) {
  const { data, loading, error } = useQuery(ITEMS);

  useEffect(() => {
    if (data) {
      const {
        readings: { data: itemsData },
      } = data;
      setQueryData(itemsData);
      console.log(data);
    }

    console.log(error);
  }, [data, loading, error]);

  return <></>;
}
