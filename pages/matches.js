import React from "react";
import Header from "@/components/Header";
import MatchesCollapse from "@/components/MatchesCollapse";
import Filter from "@/components/Filter";

export default function Matches() {

    return (
        <div>
            <Header />
            <div className="my-6 ">
                <Filter />
            </div>
            <div className="my-6 ">
                <MatchesCollapse />
            </div>
        </div>
        )
}