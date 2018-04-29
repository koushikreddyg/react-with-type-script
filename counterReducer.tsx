interface Actions {
  type: string;
  count: number

}
export const counterReducer = (s = {count :0}, action: Actions) => {
  switch (action.type) {
    case "INC":
      return {count: s.count+action.count}
    default:
      return s;
  }
}