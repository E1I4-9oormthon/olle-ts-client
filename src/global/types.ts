export interface Member {
  id: number;
  nickname: string;
  profile_image: string;
  email: string;
  gender: number;
  age_range: number;
  prefer_travel: number;
}

export interface ModifiableMemberInfo {
  prefer_travel: number;
}

export interface Option {
  index: number;
  name: string;
}

export interface Olle {
  applies_count: number;
  contact: string;
  course: number;
  nickname: string;
  prefer_gender: number;
  route: Point[];
  start_date: Date;
  title: string;
}

export interface NewOlle {
  title: string;
  prefer_gender: number;
  start_date: Date | undefined;
  course: number;
  route: Point[];
  contact: string;
}

export interface Point {
  lat: number;
  lng: number;
}

export interface CustomError {
  code: string;
  message: string;
}

declare global {
  interface Window {
    kakao: any;
  }
}
