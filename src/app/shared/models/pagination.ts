export interface IPagination {
  page?: number;
  limit?: number;
  sort?: string;
  order?: string;
  genders?: string[];
}

export interface IPageModel<T> {
  pageInfo: {
    limit: number;
    page: number;
    total: number;
  };
  items: T[];
}
