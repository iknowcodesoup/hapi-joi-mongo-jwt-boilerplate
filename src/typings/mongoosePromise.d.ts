import * as es6Promise from 'es6-promise';
declare module 'mongoose' {
  type Promise<T> = es6Promise.Promise<T>
}