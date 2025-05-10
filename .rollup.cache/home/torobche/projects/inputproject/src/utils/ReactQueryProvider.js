"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClientProvider } from "react-query";
import queryClient from "./queryClient";
function ReactQueryProvider(_a) {
    var children = _a.children;
    return (_jsx(QueryClientProvider, { client: queryClient, children: children }));
}
export default ReactQueryProvider;
//# sourceMappingURL=ReactQueryProvider.js.map