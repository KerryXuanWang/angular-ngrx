import { HttpParams } from '@angular/common/http';

import { IPagination } from '@shared/models';

export function setParams(pagination?: IPagination) {
  if (!pagination) {
    return new HttpParams();
  }
  const { page = 0, limit = 10, sort = '', order = '' } = pagination;
  return new HttpParams()
    .append('_page', `${page}`)
    .append('_limit', `${limit}`)
    .append('_sort', sort)
    .append('_order', order);
}
