import { useState } from "react";
import { useAuth } from "../context/auth";
import useSWR from "swr";

export default function useReadingList() {
  const { tokens, user } = useAuth();
  const id = user?.id;
  const URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const apiUrl = URL + "api/v1/dailypulse/";
  // console.log(apiUrl)
  const { data, error, isLoading, mutate } = useSWR(
    [apiUrl, tokens],
    getReadingList
  );
  

  // func -1- get reading list from the readinglist route argument user id that comes from useAuth
  async function getReadingList() {
    try {
      const apiUrlGet = apiUrl + "readinglistget/" + id;
      const response = await fetch(apiUrlGet, config());
      const responseJSON = await response.json();
      // console.log(responseJSON)
      return responseJSON;
    } catch (error) {
      handleError(error);
    }
  }

  // func -2- add a news post to the reading list using create route argument dictionary(must be stringfyed)
  async function createReadingLater(Info) {
    try {
      const apiUrlcreate = apiUrl + "readinglist/";
      const options = config();
      options.method = "POST";
      options.body = JSON.stringify(Info);
      // console.log(apiUrl)
      await fetch(apiUrlcreate, options);
      mutate();
    } catch (error) {
      handleError(error);
    }
  }

  // func -3- delete a news post from the reading list using delete route argument news id
  async function deleteReadingLater(read_id) {
    try {
      const apiUrlcreate = apiUrl + "readinglist/" + read_id;
      const options = config();
      options.method = "DELETE";
      await fetch(apiUrlcreate, options);
      mutate();
    } catch (error) {
      handleError(error);
    }
  }

  function config() {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokens.access,
      },
    };
  }

  function handleError(error) {
    console.log(error);
  }

  return {
    GetList: data,
    createReadingLater,
    deleteReadingLater,
    isLoading: isLoading,
  };
}
