import React from "react";
type AutoSkeletonProps = {
    loading: boolean;
    mode?: "auto" | "manual";
    children: React.ReactNode;
};
export declare const AutoSkeleton: React.FC<AutoSkeletonProps>;
export {};
