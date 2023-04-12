import React from "react";
import Header from "@/components/Header";
import MatchesCollapse from "@/components/MatchesCollapse";
import Filter from "@/components/Filter";

export default function Matches() {

    return (
        <div>
            <Header />
            <Filter />
            <MatchesCollapse />
        </div>
        )
}