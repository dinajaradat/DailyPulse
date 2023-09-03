import React from "react";
import { useAuth } from "../context/auth";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SmallHeader from "@/components/SmallHeader";
import { Parent } from "@/components/Parent";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

export default function SignIn() {
  const { t } = useTranslation();
  const { login, user, tokens } = useAuth();
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    user_name: "",
    password: "",
  });

  const [errors, setError] = useState({
    user_name: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  async function userHandler(event) {
    event.preventDefault();
    const userObj = {
      user_name: event.target.Name.value,
      password: event.target.Pass.value,
    };

    setUserInfo(userObj);
    // console.log(userObj);
    try {
      const x = await login(userObj.user_name, userObj.password);
      Cookies.set("token", JSON.stringify(x));
    } catch (err) {
      setError({
        user_name: "Invalid username",
        password: "Invalid password",
      });
    }
  }
  return (
    <>
      <Parent>
        <div
          className="bg-bgLight flex-1 pb-20 dark:bg-bgDark"
          style={{ minHeight: "70vh" }}
        >
          <div className="container mx-auto pt-20">
            <div className="flex justify-center px-6 my-12">
              {/* <!-- Row --> */}
              <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                {/* <!-- Col --> */}
                <div
                  className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                  style={{
                    backgroundImage: `url(
                    "https://img.freepik.com/free-photo/man-with-tablet_1112-648.jpg?w=1380&t=st=1691495687~exp=1691496287~hmac=502d84b9091a2d6fe8c9ee8d7c1920bd0eb1ed9d6be15de3c295222d984aca8a"
                    )`,
                    backgroundPosition: "center",
                    backgroundSize: "170%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* <img src="https://img.freepik.com/free-psd/newspaper-cover-concept-mock-up_23-2148384363.jpg?w=826&t=st=1691495160~exp=1691495760~hmac=0111bb20b93a1588a5c1c27312eaf41d8f86d22a86e3e286be8fea750599891d" /> */}
                </div>
                {/* Col  */}
                <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 className="pt-4 text-2xl text-center">
                    {t("common:youraccount")}
                  </h3>
                  <form
                    className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                    onSubmit={userHandler}
                  >
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        {t("common:username")}
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder={t("common:username")}
                        name="Name"
                        required
                      />
                      {errors.user_name && (
                        <p className="text-red-500">{errors.user_name}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          {t("common:pass")}
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="******************"
                          name="Pass"
                          required
                        />
                        {errors.password && (
                          <p className="text-red-500">{errors.password}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-6 text-center ">
                      <button
                        className="w-full px-4 py-2 font-bold text-white custom-teal-bg active:bg-teal-600 rounded-full hover:bg-bgDark focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        {t("common:RegisterAccount")}
                      </button>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                      <Link
                        className="inline-block text-sm text-teal-600  align-baseline hover:text-bgDark"
                        href="/Signup"
                      >
                        {t("common:noaccount")}
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parent>
    </>
  );
}
