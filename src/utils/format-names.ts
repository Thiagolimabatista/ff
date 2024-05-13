export const formatDestinationName = (name: string) =>
  name.normalize('NFD').replace(/\p{Mn}/gu, '');
