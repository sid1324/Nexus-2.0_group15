'use client';
import React from "react";
import { Button } from "@nexus-ds/button";
import { MonitorMobileIcon, MoonFilledIcon, InfoIcon, AvatarIcon, PetBoldIcon, Search } from "@nexus-ds/shared-icons";
import './globals.css';
import Sidebar from "@/components/sidebar";
import SearchBox from "@/components/searchBox";
import AvatarBox from "@/components/avatarBox";
import MetricCard from "@/components/metric-card";
import { Card, Skeleton } from "@nexus-ds/react";
import NotifBox from "@/components/notif-box";
import MovingBar from "@/components/metric-card/progress";
import GrpahBox from "@/components/graph-box";

const Dashboard: React.FC = () => {

  return (
    <>
      <main className="flex flex-row flex-nowrap gap-10 justify-start items-stretch content-stretch bg-gradient-radial from-[#0e0e0e] to-[#101010]">
        <div className=" w-[15%]">
          <Sidebar/>
        </div>
        <div className=" w-[65%]">
          <SearchBox/>
          <div className="flex flex-row flex-nowrap gap-10 justify-around ">
            <MetricCard value={100} footer="Total Users" />
            <MetricCard value={100} footer="Total Users" />
            <MetricCard value={100} footer="Total Users" />
            <MetricCard value={100} footer="Total Users" />
            <MetricCard value={100} footer="Total Users" />
          </div>
          <MovingBar/>
          <GrpahBox/>
        </div>
        <div className=" w-[15%] flex flex-col items-center">
        <div className="w-[15%] fixed">
        <AvatarBox/>
        <NotifBox/>
        </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
