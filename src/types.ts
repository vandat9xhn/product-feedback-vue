import { PropType } from 'vue';

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
  color: string;

  title: string;
  detail: string;
  count_vote: number;
  count_comment: number;
}

export interface FeedbackDetail {
  id: number;
  user: User;
  category: Category;
  status: Status;
  color: string;

  title: string;
  detail: string;
  votes: Vote[];
  comments: Comment[];
}

export interface Suggestion {
  id: number;
  user: User;
  category: Category;
  status: Status;
  color: string;

  title: string;
  detail: string;
  count_vote: number;
  count_comment: number;
}

// ------

export const getAPropsRequired = <T>(value: any) => ({
  type: value as PropType<T>,
  required: true as const,
});

export const VoidFunction = Function as PropType<() => void>;

// ------
export type filterSuggestType = (name: string) => void;
export type handleAddFeedbackType = ({
  title,
  detail,
  name,
}: {
  title: string;
  detail: string;
  name: string;
}) => void;

export const ArrNamesType = Array as PropType<string[]>;
export const filterSuggestTypeProps = Function as PropType<filterSuggestType>;
export const sortSuggestTypeProps = Function as PropType<filterSuggestType>;

export const handleAddFeedbackTypeProps =
  Function as PropType<handleAddFeedbackType>;
