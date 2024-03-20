export default function Log({ turns }) {
  if (turns.length <= 0) return;

  const { square, player } = turns[0];
  console.log(player + " marked [" + square.row + ", " + square.col + "]");
}
