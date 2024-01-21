/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type { PageEntityObject } from "./data-contracts";
import type { HttpClient, RequestParams } from "./http-client";

export class SearchController<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags SearchController
   * @name Search
   * @request GET:/api/search
   */
  search = (
    query?: {
      keyword?: string;
      category?: string;
      /** @format int32 */
      page?: number;
      /** @format int32 */
      size?: number;
      regex?: string;
      /** @format date-time */
      startAt?: string;
      /** @format date-time */
      endAt?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<JsonRet<PageEntityObject>, any>({
      path: `/api/search`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags SearchController
   * @name Suggest
   * @summary 搜索建议
   * @request GET:/api/search/suggest
   */
  suggest = (params: RequestParams = {}) =>
    this.http.request<JsonRet<object[]>, any>({
      path: `/api/search/suggest`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags SearchController
   * @name Recent
   * @summary 最近搜过
   * @request GET:/api/search/recent
   */
  recent = (params: RequestParams = {}) =>
    this.http.request<JsonRet<object[]>, any>({
      path: `/api/search/recent`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags SearchController
   * @name Guess
   * @summary 猜你想搜
   * @request GET:/api/search/guess
   */
  guess = (params: RequestParams = {}) =>
    this.http.request<JsonRet<string>, any>({
      path: `/api/search/guess`,
      method: "GET",
      ...params,
    });
}
