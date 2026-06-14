import {inputFieldProps} from "@/type"
import CustomInput from "@/components/CustomInput"


export const showInputFields = ({
    key,
    label,
    placeHolder,
    icon,
  }: inputFieldProps) => (
    <CustomInput
      key={key}
      label={label}
      placeholder={placeHolder}
      leftIcon={icon}
    />
  );