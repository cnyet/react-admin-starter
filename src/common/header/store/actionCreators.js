/**
 * 定义state派发的action 
 */
import { SearchFocus, SearchBlur } from './constants';

export const focusAction = {
  type: SearchFocus
};

export const blurAction = {
  type: SearchBlur
};