export interface ReviewListItem {
  id: string,
  title: string,
  cover: string,
  shortDescription: string,
  createdAt: string,
  author: {
    id: string,
    username: string,
    avatar: string,
  }
}

export interface ReviewDetail {
  id: string,
  createdAt: string,
  title: string,
  cover: string,
  shortDescription: string,
  content: string,
  authorId: string,
}

export interface ReviewRequest {
  publish: boolean,
  title: string,
  cover: string,
  shortDescription: string,
  content: string,
  authorId: string,
}


export interface ReviewRequestExtend extends ReviewRequest {
  isDraft: boolean,
  id: number,
}

