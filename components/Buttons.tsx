import { MouseEventHandler, ReactElement } from "react";
import { IconType } from "react-icons";

type ButtonProps = {
    callback: MouseEventHandler;
    name: String;
    icon?: ReactElement<IconType>;
}
export const Button = ({ name, callback }: ButtonProps) => {
    return (
        <button>
            {name}
        </button>
    )
}

export const ButtonPrimary = ({ name, callback, icon }: ButtonProps) => {
    return (
        <div className="px-4 py-2 gap-2 bg-light-blurple rounded-md hover:bg-dark-blurple hover:opacity-95 transition-all duration-300 flex items-center justify-center">
            <div className="text-xl">
            {icon}
            </div>
            <button onClick={callback} className='font-semibold'>
                {name}
            </button>
        </div>
    )
}