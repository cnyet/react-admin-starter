import { INPUT_CHANGE_VALUE } from './actionTypes';

export function getInputChangeValue (value) {
  return {
    type: INPUT_CHANGE_VALUE,
    value
  }
}