// pages/api/todos.js
import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json("hello");
};
