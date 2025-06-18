import React from 'react';

type AutoSkeletonProps = {
    loading: boolean;
    mode?: "auto" | "manual";
    children: React.ReactNode;
};
declare const AutoSkeleton: React.FC<AutoSkeletonProps>;

export { AutoSkeleton, type AutoSkeletonProps };
