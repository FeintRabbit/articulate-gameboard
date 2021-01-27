const cardCategories = ["person", "world", "object", "action", "nature", "random"];

export function category(position) {
  const index = position - Math.floor(position / 6) * 6;
  return cardCategories[index];
}
