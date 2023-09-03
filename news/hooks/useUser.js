import axios from "axios";
import { useAuth } from "@/context/auth";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function useUser() {
  const { tokens, logout, user } = useAuth();
  const url = "https://news-back-end.vercel.app/accounts/update_user/";

  //   useEffect(()=>{

  //   },[])

  async function changeUserData(info) {
    try {
      await axios.put(`${url}${user.id}/`, info, {
        headers: {
          Authorization: "Bearer " + tokens.access,
          "Content-Type": "application/json",
        },
      });

      //   const newtoken = await axios.post(
      //     `https://news-back-end.vercel.app/api/token/refresh/`,
      //     { refresh: tokens.refresh }
      //   );
      //   console.log(newtoken.data);

      //   Cookies.set(
      //     "token",
      //     JSON.stringify({ ...newtoken.data, refresh: tokens.refresh })
      //   );

      //   return data;
    } catch (err) {
      console.log(err);
    }
  }

  return {
    changeUserData,
  };
}

// axios
//       .put(${url}${taskInfo.id}, obj, config)
//       .then((result) => {
//         console.log(result.data);

//         axios
//       .get(url, config)
//       .then((result) => {
//         setData(result.data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//       })
//       .catch((err) => {
//         console.log("updateSide", err);
//       });
//     close();
//   };
