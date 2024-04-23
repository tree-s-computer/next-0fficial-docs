import { NextResponse } from "next/server";

export const GET = async () => {
  const todos = [
    { content: "할일1", id: 1 },
    { content: "할일2", id: 2 },
  ];
  return NextResponse.json({ todos });
};
