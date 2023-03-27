"use client";

import { useState } from "react";
import { doDoubling } from "./action";
import { useMutation } from "@tanstack/react-query";

export const Counter = () => {
  const [count, setCount] = useState(1);
  const { mutateAsync } = useMutation(["doubling"], doDoubling, {
    onSuccess: (data) => setCount(data),
  });

  return (
    <div className="flex flex-col text-xl gap-4 text-center">
      {count}
      <button onClick={() => mutateAsync(count)}>Increase</button>
    </div>
  );
};