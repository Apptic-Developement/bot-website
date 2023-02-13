import { ReactElement } from "react";
import { IconType } from "react-icons";

type Routes = {
    name: string;
    path: string;
}

export const navRoutes: Array<Routes> = [
    {name: 'Home', path: '/'},
    {name: 'Vote', path: '/vote'},
    {name: 'Commands', path: '/commands'},
    {name: 'Support', path: '/support'},
    {name: 'Invite', path: '/invite'},
    {name: 'Docs', path: '/docs'},
]

