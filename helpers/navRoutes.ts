// type
type Routes = {
    name: string;
    path: string;
};

// all routes
export const navRoutes: Array<Routes> = [
    { name: "Home", path: "/" },
    { name: "Docs", path: "/docs" },
    { name: "Commands", path: "/commands" },
    { name: "Support", path: "/support" },
    { name: "Vote", path: "/vote" },
    { name: "Invite", path: "/invite" },
];
