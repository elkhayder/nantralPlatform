import axios from 'axios';

import { Page, PageDTO, adaptPage } from '#shared/utils/pagination';

import { adaptPost } from '../infra/post.adapter';
import { PostDTO } from '../infra/post.dto';
import { Post } from '../post.types';

type GetPostListParams = {
  pinned?: boolean;
  fromDate?: Date;
  toDate?: Date;
  limit?: number;
  page: number;
  pageSize?: number;
};

export async function getPostList(
  options: GetPostListParams
): Promise<Page<Post>> {
  const { data } = await axios.get<PageDTO<PostDTO>>('/api/post/', {
    params: {
      pinned: options.pinned,
      from_date: options.fromDate,
      to_date: options.toDate,
      limit: options.limit,
      page: options.page,
      page_size: options.pageSize,
    },
  });

  return adaptPage(data, adaptPost);
}
