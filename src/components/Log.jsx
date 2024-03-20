export default function Log({ turns, players }) {
  if (turns.length <= 0) return;

  const { square, player } = turns[0];
  console.log(
    players[player] + " marked [" + square.row + ", " + square.col + "]"
  );
}
