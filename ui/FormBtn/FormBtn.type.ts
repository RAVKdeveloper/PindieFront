import { ButtonHTMLAttributes } from "react";

export interface FormBtnType extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    borderR?: boolean
    variant: 'primary' | 'basic'
}