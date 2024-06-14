import type { UrlMenuTypes } from "./definitions";

export const urlMenu: UrlMenuTypes[] = [
    {
        id: 1,
        description: "library",
        url: ["https://www.npmjs.com/package/json-server", "https://react-icons.github.io/react-icons/",
            "https://docs.pmnd.rs/zustand", "https://tanstack.com/query/latest"
        ]
    },
    {
        id: 2,
        description: "ui",
        url: ["https://daisyui.com/", "https://ui.shadcn.com/", "https://mui.com/material-ui/", "https://ant.design/"]
    },
    {
        id: 3,
        description: "frameworks",
        url: ["https://nextjs.org/", "https://vitejs.dev/", "https://react.dev/", "https://kit.svelte.dev/"]
    }
];