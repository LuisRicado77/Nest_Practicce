/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface IComment {
  id: number;
  content: string;
}

export interface ICommentCreate extends Omit<IComment, "id"> {}

export interface ICommentUpdate extends Partial<ICommentCreate> {}
