import * as React from 'react';

export type MouseHandler = (e: React.MouseEvent) => void;
export type HighMouseHandler<T> = (T: T) => (e: React.MouseEvent) => void;

export type BaseProps = {
  className?: string,
  style?: React.CSSProperties,
}
