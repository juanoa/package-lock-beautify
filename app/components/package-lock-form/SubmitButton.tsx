import React, {FC} from "react";

export const SubmitButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      type="submit"
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
      {...props}
    />
  );
}