import { getNormalDate } from "@/lib/getNormalDate";
import React from "react";

const getPastDays = (isoString: string): number => {
  const createdDate = newDate(isoString);
  const currentDate = newDate();

  //Reset times to midnight for accurate day calculation
  createdDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  const diffTime = currentDate.getTime() - createdDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
};
function timeAgo(createAt: string): string {
  const createdDate = new Date (createdAt); // Convert the string to a Date object
  const now = new Date();

  const seconds = Math.floor((now.getTime() - createdDate.getTime()) / 1000);
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }

  const months = Math.floor(days / 12);
  if (months < 12) {
    return `${months} month$${months !== 1 ? "s" : ""} ago`;
  }

  const years = Math.floor(months / 12);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
}

export default function DateColumn({
  row,
  accessorKey,
  }:{
    row: any;
    accessorKey: any;
  }) {
    const createAt = row.getValue(`${accessorKey}`);
    const date = getNormalDate(createAt);
    const originalDate = new Date(createAt);

    const day = originalDate.getDate();
    const month = originalDate.toLocaleString("default", {month: "short"});
    const year = originalDate.getFullYear();
    const time = timeAgo(createAt);
    const pastDays = getPastDays(createAt);
    return <div className="">{pastDays > 10 ? date : time}</div>
  }