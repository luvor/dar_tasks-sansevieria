export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  avatar?: string;
}

export interface Color {
  title: string;
  background: string;
  text: string;
  accent: string;
  highlight: string;
}
