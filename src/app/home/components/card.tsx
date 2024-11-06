"use client";

import MyButton from "@/components/common/form/my-button";
import { toast } from "sonner";

export default function Card() {
  return (
    <div>
      Card
      <MyButton
        title="Show toast"
        onClick={() => {
          toast.success("Hello");
        }}
      />
    </div>
  );
}
