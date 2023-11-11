function rps(p1, p2) {
  p1 = p1.toLowerCase()
  p2 = p2.toLowerCase()
  switch (p1) {
    case p2:
      return "It's a draw";
    case "rock":
      return p2 == "paper" ? "The winner is p2" : "The winner is p1";
    case "paper":
      return p2 == "scissors" ? "The winner is p2" : "The winner is p1";
    case "scissors":
      return p2 == "rock" ? "The winner is p2" : "The winner is p1";
  }
}
