const greeting = [
  {
    id: "morning",
    greeting: "Good morning",
  },
  {
    id: "afternoon",
    greeting: "Good afternoon",
  },
  {
    id: "evening",
    greeting: "Good evening",
  },
];

export function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 12) {
    return greeting[0];
  } else if (hour < 18) {
    return greeting[1];
  } else {
    return greeting[2];
  }
}
