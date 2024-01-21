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

import type { Course, CourseCmdCreateCmd, CourseCmdUpdateCmd, CourseVO, PageEntityCourseVO } from "./data-contracts";
import type { HttpClient, RequestParams } from "./http-client";
import { ContentType } from "./http-client";

export class CourseApi<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags CourseApi
   * @name Want
   * @summary 想选
   * @request POST:/api/course/want/{id}
   */
  want = (id: string, params: RequestParams = {}) =>
    this.http.request<JsonRet<boolean>, any>({
      path: `/api/course/want/${id}`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseApi
   * @name Update1
   * @summary 更新课程
   * @request POST:/api/course/update
   */
  update = (data: CourseCmdUpdateCmd, params: RequestParams = {}) =>
    this.http.request<JsonRet<CourseVO>, any>({
      path: `/api/course/update`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseApi
   * @name Learn
   * @summary 学过
   * @request POST:/api/course/learn/{id}
   */
  learn = (id: string, params: RequestParams = {}) =>
    this.http.request<JsonRet<boolean>, any>({
      path: `/api/course/learn/${id}`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseApi
   * @name Del1
   * @summary 删除课程
   * @request POST:/api/course/del/{id}
   */
  del = (id: string, params: RequestParams = {}) =>
    this.http.request<JsonRet<CourseVO>, any>({
      path: `/api/course/del/${id}`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseApi
   * @name Add1
   * @summary 新增课程
   * @request POST:/api/course/add
   */
  add = (data: CourseCmdCreateCmd, params: RequestParams = {}) =>
    this.http.request<JsonRet<CourseVO>, any>({
      path: `/api/course/add`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseApi
   * @name Get1
   * @summary 获取详情
   * @request GET:/api/course/{id}
   */
  get = (id: string, params: RequestParams = {}) =>
    this.http.request<JsonRet<Course>, any>({
      path: `/api/course/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags CourseApi
   * @name Query1
   * @summary 分页查询
   * @request GET:/api/course/query
   */
  query = (
    query?: {
      name?: string;
      category?: string;
      department?: string;
      depart?: string;
      point?: string;
      teachers?: string[];
      campuses?: string[];
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
    this.http.request<JsonRet<PageEntityCourseVO>, any>({
      path: `/api/course/query`,
      method: "GET",
      query: query,
      ...params,
    });
}
