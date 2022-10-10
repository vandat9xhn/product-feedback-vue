import { ARR_STATUS } from '@/data/suggestion';
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
    color: ARR_STATUS[1].color,

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
    color: ARR_STATUS[0].color,

    title: 'Title 2',
    detail:
      'Lorem ipsum d 2132 42 3 23 23r, adipisicing elit. Iusto aliquam sia4d asd 4asd4 at beatae voluptatum ',
    count_vote: 2,
    count_comment: 20,
  },
  {
    id: 3,
    user: {
      id: 1,
      name: '',
      picture: '',
      username: '',
    },
    category: 'Enhancement',
    status: 'Live',
    color: ARR_STATUS[2].color,

    title: 'Title 3',
    detail:
      '14123 1234 2sum d 2132 42 3 23 23r, adipisicing elit. Iusto aliquam sia4d asd 4asd4 at beatae voluptatum ',
    count_vote: 29,
    count_comment: 2,
  },
  {
    id: 4,
    user: {
      id: 1,
      name: '',
      picture: '',
      username: '',
    },
    category: 'Enhancement',
    status: 'Live',
    color: ARR_STATUS[2].color,

    title: 'Title 3',
    detail:
      'ok ok 2sum d 2132 42 3 23 23r, adipisicing elit. Iusto aliquam sia4d asd 4asd4 at beatae voluptatum ',
    count_vote: 9,
    count_comment: 0,
  },
];
