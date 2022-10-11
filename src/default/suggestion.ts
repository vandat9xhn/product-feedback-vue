import { ARR_STATUS } from '@/data/suggestion';
import { FeedbackDetail, Suggestion } from '@/types';

export const DEFAULT_USER = {
  id: 1,
  name: 'Nguyen',
  picture: '',
  username: 'nguyen123',
};

export const DEFAULT_SUGGESTION: Suggestion[] = [
  {
    id: 1,
    user: DEFAULT_USER,
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
    user: DEFAULT_USER,
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
    user: DEFAULT_USER,
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
    user: DEFAULT_USER,
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

export const DEFAULT_DETAIL: FeedbackDetail = {
  id: 1,
  user: DEFAULT_USER,
  category: 'Bug',
  status: 'In-Progress',
  color: ARR_STATUS[1].color,

  title: 'Title 1',
  detail:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aliquam sit fugiat beatae voluptatum ',
  comments: [
    {
      id: 1,
      content: 'Content Comments',
      user: DEFAULT_USER,
      subs: [
        {
          id: 1,
          content: 'Content Comments',
          user: DEFAULT_USER,
          user_reply: DEFAULT_USER.username,
        },
      ],
    },
    {
      id: 2,
      content: 'Content Comments',
      user: DEFAULT_USER,
      subs: [
        {
          id: 2,
          content: 'Content Comments',
          user: DEFAULT_USER,
          user_reply: DEFAULT_USER.username,
        },
        {
          id: 3,
          content: 'Content Comments',
          user: DEFAULT_USER,
          user_reply: DEFAULT_USER.username,
        },
      ],
    },
    {
      id: 3,
      content: 'Content Comments',
      user: DEFAULT_USER,
      subs: [
        
      ],
    },
  ],
  votes: [{ id_user: 1 }, { id_user: 2 }, { id_user: 3 }, { id_user: 4 }],
};
