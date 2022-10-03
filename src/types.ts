//
export interface User {
  id: number;
  name: string;
  picture: string;
  username: string;
}

export interface Comment {
  id: number;
  user: User;
  content: string;
  subs: Sub[];
}
export interface Sub {
  id: number;
  user: User;
  user_reply: User['username'];
  content: string;
}
export interface Vote {
  id_user: number;
}

export type Category = 'UI' | 'UX' | 'Enhancement' | 'Bug' | 'Feature';
export type Status = 'Planned' | 'In-Progress' | 'Live';
export interface Feedback {
  id: number;
  user: User;
  category: Category;
  status: Status;

  title: string;
  detail: string;
  votes: Vote[];
  comments: Comment[];
}
