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

import type { UserCmdCreateCmd } from "./data-contracts";
import type { HttpClient, RequestParams } from "./http-client";
import { ContentType } from "./http-client";

export class UserApi<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags UserApi
   * @name Add
   * @request POST:/api/user/add
   */
  add = (data: UserCmdCreateCmd, params: RequestParams = {}) =>
    this.http.request<JsonRet<string>, any>({
      path: `/api/user/add`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
