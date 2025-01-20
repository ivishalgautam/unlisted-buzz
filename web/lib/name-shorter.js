export const nameShorter = (name) => {
  const arr = name?.split(" ");
  return `${String(arr?.[0] ?? "")
    .charAt(0)
    .toUpperCase()} ${String(arr?.[1] ?? "")
    .charAt(1)
    .toUpperCase()}`;
};
