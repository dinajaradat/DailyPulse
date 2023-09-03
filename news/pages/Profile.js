import NavProfile from "@/components/NavProfile";
import { Parent } from "@/components/Parent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useEffect } from "react";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home", "common"])),
        },
    };
}

export default function Profile() {
    const { t } = useTranslation();
    const [category, setCategory] = useState("all");
    useEffect(() => { }, [category]);

    return (
        <>
            <Parent>
                <NavProfile setCategory={setCategory} catgory={category} />
                
            </Parent>
        </>
    )
}