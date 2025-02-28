export interface User {
  name: string;
  password: string;
}

export interface Post {
  id?: number;
  date: Date;
  hours: number;
  message: string;
  done: boolean;
}
