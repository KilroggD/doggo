// simple function to randomize list in presudo-random order
export const shuffle = list => list.sort(() => Math.random() - 0.5);