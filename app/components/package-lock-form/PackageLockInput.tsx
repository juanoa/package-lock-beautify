import React, {FC} from "react";

export const PackageLockInput: FC<React.InputHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return (
    <textarea
      placeholder="Paste your package-lock.json here"
      className="relative bg-black text-white font-mono text-sm px-6 py-4 min-w-[40rem] min-h-[30rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      {...props}>
    </textarea>
  );
}