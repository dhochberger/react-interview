export type Movie = {
  id: number;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  liked?: boolean;
  disliked?: boolean;
};
