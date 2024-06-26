import { InputHTMLAttributes } from "react";

export interface TextFieldType extends InputHTMLAttributes<HTMLInputElement> {
     label: string
     isError?: boolean
     textError?: string
}