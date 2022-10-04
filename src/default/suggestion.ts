import { Suggestion } from '@/types';

export const DEFAULT_SUGGESTION: Suggestion[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: '',
      picture: '',
      username: '',
    },
    category: 'Bug',
    status: 'In-Progress',

    title: 'Title 1',
    detail:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aliquam sit fugiat beatae voluptatum ',
    count_vote: 1,
    count_comment: 1,
  },
  {
    id: 2,
    user: {
      id: 1,
      name: '',
      picture: '',
      username: '',
    },
    category: 'Enhancement',
    status: 'Planned',

    title: 'Title 2',
    detail:
      'Lorem ipsum d 2132 42 3 23 23r, adipisicing elit. Iusto aliquam sia4d asd 4asd4 at beatae voluptatum ',
    count_vote: 2,
    count_comment: 20,
  },
];
