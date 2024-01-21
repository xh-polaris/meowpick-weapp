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

import type { PageEntityTagVO, TagCmdCreateCmd, TagCmdUpdateCmd, TagVO } from "./data-contracts";
import type { HttpClient, RequestParams } from "./http-client";
import { ContentType } from "./http-client";

export class TagApi<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags TagApi
   * @name Update
   * @summary 修改标签
   * @request POST:/api/tag/update
   */
  update = (data: TagCmdUpdateCmd, params: RequestParams = {}) =>
    this.http.request<JsonRet<TagVO>, any>({
      path: `/api/tag/update`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags TagApi
   * @name Del
   * @summary 删除标签
   * @request POST:/api/tag/del/{id}
   */
  del = (id: string, params: RequestParams = {}) =>
    this.http.request<JsonRet<TagVO>, any>({
      path: `/api/tag/del/${id}`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags TagApi
   * @name Add
   * @summary 新增标签
   * @request POST:/api/tag/add
   */
  add = (data: TagCmdCreateCmd, params: RequestParams = {}) =>
    this.http.request<JsonRet<TagVO>, any>({
      path: `/api/tag/add`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags TagApi
   * @name Get
   * @summary 获取标签
   * @request GET:/api/tag/{id}
   */
  get = (id: string, params: RequestParams = {}) =>
    this.http.request<JsonRet<TagVO>, any>({
      path: `/api/tag/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags TagApi
   * @name Query
   * @summary 分页查询
   * @request GET:/api/tag/query
   */
  query = (
    query?: {
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
    this.http.request<JsonRet<PageEntityTagVO>, any>({
      path: `/api/tag/query`,
      method: "GET",
      query: query,
      ...params,
    });
}
