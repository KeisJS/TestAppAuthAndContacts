import React from 'react'

export interface RouteData {
  pattern: string;
  name: string;
  component: React.FC;
}

export interface RoutesData {
  defaultRoute: RouteData;
  [name: string]: RouteData;
}
