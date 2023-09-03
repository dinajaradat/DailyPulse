import { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL; // Retrieve the backend URL from the environment variable

// export function useApi(category) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${backendURL}api/v1/dailypulse/list/${category}/`
//         );
//         setData(response.data);
//         setLoading(false);
//       } catch (e) {
//         setError(true);
//       }
//     };
//     fetchData();
//   }, [category]);
//   return { data, loading, error };
// }

// export function useApi2(category, language) {
//   const [dataAr, setDataAr] = useState([]);
//   const [loadingAr, setLoadingAr] = useState(true);
//   const [error, setError] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${backendURL}api/v1/dailypulse/list/${category}/${language}`
//         );
//         setDataAr(response.data);
//         setLoadingAr(false);
//       } catch (e) {
//         setError(true);
//       }
//     };
//     fetchData();
//   }, [category, language]);
//   return { dataAr, loadingAr, error };
// }

// export function useApi3(location) {
//   const [dataLo, setDataLo] = useState([]);
//   const [loadingLo, setLoadingLo] = useState(true);
//   const [error, setError] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${backendURL}api/v1/dailypulse/${location}`
//         );
//         setDataLo(response.data.main.temp);
//         setLoadingLo(false);
//       } catch (e) {
//         setError(true);
//       }
//     };
//     fetchData();
//   }, [location]);
//   return { dataLo, loadingLo, error };
// }

export function useApi(category) {
  const { data, isLoading } = useSWR(
    [`${backendURL}api/v1/dailypulse/list/${category}/`],
    fetchData
  );
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const url = `${backendURL}api/v1/dailypulse/list/${category}/`;
      const response = await axios.get(url);
      const responseJSON = await response.data;
      if (responseJSON) {
        setLoading(false);
      }
      return responseJSON;
    } catch (err) {
      handleError(err);
    }
  }
  function handleError(err) {
    console.error(err);
  }

  return {
    data: data,
    loading: loading,
  };
}

export function useApi2(category, language) {
  const { data, isLoading } = useSWR(
    [`${backendURL}api/v1/dailypulse/list/${category}/${language}`],
    fetchData
  );
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const url = `${backendURL}api/v1/dailypulse/list/${category}/${language}`;
      const response = await axios.get(url);
      const responseJSON = await response.data;
      if (responseJSON) {
        setLoading(false);
      }
      return responseJSON;
    } catch (err) {
      handleError(err);
    }
  }
  function handleError(err) {
    console.error(err);
  }

  return {
    dataAr: data,
    loadingAr: loading,
  };
}

export function useApi3(location = "jordan") {
  const { data, isLoading } = useSWR(
    [`${backendURL}api/v1/dailypulse/${location}`],
    fetchData
  );

  async function fetchData() {
    try {
      const url = `${backendURL}api/v1/dailypulse/${location}`;
      const response = await axios.get(url);
      const responseJSON = await response.data.main.temp;

      return responseJSON;
    } catch (err) {
      handleError(err);
    }
  }
  function handleError(err) {
    console.error(err);
  }

  return {
    dataLo: data,
    loadingLo: isLoading,
  };
}
