import React from 'react';

type SkeletizeProps = {
    loading: boolean;
    mode?: 'auto' | 'manual';
    children: React.ReactNode;
};
declare const Skeletize: React.FC<SkeletizeProps>;

export { Skeletize, type SkeletizeProps };
