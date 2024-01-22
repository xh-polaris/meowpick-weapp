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

export interface UserCmdCreateCmd {
  id?: string;
  name?: string;
}

export type TagCmdUpdateCmd = object;

export type TagVO = object;

export type TagCmdCreateCmd = object;

export interface CourseCmdUpdateCmd {
  id?: string;
  name?: string;
  category?: string;
  department?: string;
  depart?: string;
  point?: string;
  teachers?: string[];
  campuses?: string[];
  tags?: string[];
}

export interface CourseVO {
  id?: string;
  name?: string;
  category?: string;
  department?: string;
  teachers?: string[];
  campuses?: string[];
  tags?: string[];
  depart?: string;
  point?: string;
}

export interface CourseCmdCreateCmd {
  name?: string;
  category?: string;
  department?: string;
  depart?: string;
  point?: string;
  teachers?: string[];
  campuses?: string[];
  tags?: string[];
}

export interface CommentCmdUpdateCmd {
  id: string;
  text: string;
}

export interface CommentVO {
  id?: string;
  uid?: string;
  text?: string;
}

export interface CommentCmdCreateCmd {
  target: string;
  text: string;
}

export interface PageEntityTagVO {
  /** @format int64 */
  total?: number;
  rows?: TagVO[];
}

export interface PageEntityObject {
  /** @format int64 */
  total?: number;
  rows?: object[];
}

export interface PageEntityCourseVO {
  /** @format int64 */
  total?: number;
  rows?: CourseVO[];
}

export interface PageEntityCommentVO {
  /** @format int64 */
  total?: number;
  rows?: CommentVO[];
}
