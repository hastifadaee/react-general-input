"use client";

import React from "react";
import { QueryClientProvider } from "react-query";
import queryClient from "./queryClient";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
