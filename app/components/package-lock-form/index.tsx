import React, {FC} from "react";
import {mapTextToPackageLock} from "@/app/utils/map-text-to-package-lock";
import {PackageLock} from "@/app/types/PackageLock";
import {SubmitButton} from "@/app/components/package-lock-form/SubmitButton";
import {PackageLockInput} from "@/app/components/package-lock-form/PackageLockInput";

interface Props {
  onSubmitPackageJson: (packageLock: PackageLock) => void;
}

export const PackageLockForm: FC<Props> = ({onSubmitPackageJson}) => {

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const packageLockJson = formData.get("package-lock-json");
    onSubmitPackageJson(mapTextToPackageLock(packageLockJson as string));
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-3 justify-center items-center">
        <PackageLockInput name="package-lock-json" />
        <SubmitButton>
          Beautify 🪄
        </SubmitButton>
      </form>
    </div>
  )
}