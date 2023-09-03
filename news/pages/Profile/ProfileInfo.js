import NavProfile from "@/components/NavProfile";
import { Parent } from "@/components/Parent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useAuth } from "@/context/auth";

import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import Cookies from "js-cookie";
import useUser from "@/hooks/useUser";
import { SigninModel } from "@/components/SigninModel";
import { useState, useEffect } from "react";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}
export default function ProfileInfo() {
  const { user, tokens } = useAuth();

  const { changeUserData } = useUser();
  const { t } = useTranslation();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      email: e.target.email.value,
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      location: e.target.city.value,
    };
    await changeUserData(obj);
    // console.log(obj);

    // await axios.put(
    //   `https://news-back-end.vercel.app/accounts/update_user/${user.id}/`,
    //   obj,
    //   {
    //     headers: {
    //       Authorization: "Bearer " + tokens.access,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // router.push("/Profile/ProfileInfo");
    // const newtoken = await axios.post(
    //   `https://news-back-end.vercel.app/api/token/refresh/`,
    //   { refresh: "" + tokens.refresh }
    // );

    // Cookies.set("token", JSON.stringify(newtoken.data));
  }

  return (
    <Parent>
      <NavProfile />
      {!user ? (
        <div
          style={{ minHeight: "70vh" }}
          className="bg-bgLight dark:bg-bgDark flex justify-center items-center"
        >
          <Loader />
        </div>
      ) : (
        <div
          className="bg-bgLight dark:bg-bgDark"
          style={{ minHeight: "70vh" }}
        >
          <div
            className="bg-bgLight pb-10 pt-10 dark:bg-bgDark"
            style={{ minHeight: "70vh" }}
          >
            <div className="container mx-auto">
              <div className="flex justify-center px-6 ">
                {/* <!-- Row --> */}
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                  <div className="w-full  bg-white p-5 rounded-lg ">
                    <h3 className="pt-4 text-2xl text-center">
                      Profile Information
                    </h3>
                    <form
                      className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-4 md:flex md:justify-between"></div>
                      <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          {t("common:FirstName")}
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="firstName"
                          type="text"
                          placeholder={t("common:FirstName")}
                          name="firstName"
                          required
                          defaultValue={user.first_name}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          {t("common:LastName")}
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="lastName"
                          type="text"
                          placeholder={t("common:LastName")}
                          name="lastName"
                          required
                          defaultValue={user.last_name}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          {t("common:Email")}
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          placeholder={t("common:Email")}
                          name="email"
                          required
                          defaultValue={user.email}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          {t("common:City")}
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="city"
                          type="text"
                          placeholder={t("common:City")}
                          name="city"
                          required
                          defaultValue={user.location}
                        />
                      </div>
                      <div className="mb-4 md:flex md:justify-between"></div>
                      <div className="mb-6 text-center">
                        {/* <button
                          className="w-full px-4 py-2 font-bold text-white custom-teal-bg active:bg-teal-600 rounded-full hover:bg-bgDark focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Apply Changes
                        </button> */}

                        <SigninModel />
                      </div>
                      <hr className="mb-6 border-t" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Parent>
  );
}
