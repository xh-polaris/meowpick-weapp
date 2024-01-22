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

import type { CommentCmdCreateCmd, CommentCmdUpdateCmd, CommentVO, PageEntityCommentVO } from "./data-contracts";
import type { HttpClient, RequestParams } from "./http-client";
import { ContentType } from "./http-client";

export class CommentApi<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags CommentApi
   * @name Update2
   * @summary 更新评论
   * @request POST:/api/comment/update
   */
  update = (data: CommentCmdUpdateCmd, params: RequestParams = {}) =>
    this.http.request<JsonRet<CommentVO>, any>({
      path: `/api/comment/update`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CommentApi
   * @name Del2
   * @summary 删除评论
   * @request POST:/api/comment/del/{id}
   */
  del = (id: string, params: RequestParams = {}) =>
    this.http.request<JsonRet<CommentVO>, any>({
      path: `/api/comment/del/${id}`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags CommentApi
   * @name Add3
   * @summary 新增评论
   * @request POST:/api/comment/add
   */
  add = (data: CommentCmdCreateCmd, params: RequestParams = {}) =>
    this.http.request<JsonRet<CommentVO>, any>({
      path: `/api/comment/add`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CommentApi
   * @name Get2
   * @summary 获取详情
   * @request GET:/api/comment/{id}
   */
  get = (id: string, params: RequestParams = {}) =>
    this.http.request<JsonRet<CommentVO>, any>({
      path: `/api/comment/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags CommentApi
   * @name Query2
   * @summary 分页查询
   * @request GET:/api/comment/query
   */
  query = (
    query?: {
      id?: string;
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
    this.http.request<JsonRet<PageEntityCommentVO>, any>({
      path: `/api/comment/query`,
      method: "GET",
      query: query,
      ...params,
    });
}
