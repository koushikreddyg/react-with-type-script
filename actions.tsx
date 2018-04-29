enum ActionTypes {
    set = "SET",
    inc = "INC",
    dec = "DEC"
}
export const incriment = (value:number) => ({
    type: ActionTypes.inc,
    count: value
})

