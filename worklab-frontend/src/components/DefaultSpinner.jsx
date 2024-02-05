import { Spinner } from "@material-tailwind/react";
 
const DefaultSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden gap-2">
      <Spinner className="h-12 w-12 text-blue-700/50 animate-spin" />
      <p className="text-tertiary text-[16px] mb-4">Carregando...</p>
    </div>
  ) 
}

export default DefaultSpinner