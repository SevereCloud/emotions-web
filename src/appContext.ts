import React from 'react';
import type { ctxValue } from './types';

const AppCtx = React.createContext<ctxValue | null>(null);

export default AppCtx;
