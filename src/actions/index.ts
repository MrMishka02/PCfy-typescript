export const getSelectValues = (values: any) => {
  return {
    type: 'SELECT_VALUE',
    payload: values,
  }
}

export const getInputValues = (values: any) => {
  return {
    type: 'INPUT_VALUE',
    payload: values,
  }
}
