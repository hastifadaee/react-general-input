import { QueryClient } from "react-query";
var queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 0,
        },
    },
});
export default queryClient;
//# sourceMappingURL=queryClient.js.map