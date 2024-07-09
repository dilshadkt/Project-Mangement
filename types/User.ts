export type TUser = TPureUser | null;
export type TPureUser = {
  id: number;
  displayName: string;
  email: string;
  basket: any[];
  totalPrice: number;
};

export type UserData = {
  name: string | null;
  email: string | null;
  role: string | null;
  _id: string | null;
};

export type UserState = {
  userData: UserData;
  loading: boolean;
  fetchError: string | undefined;
  error: string | null;
  logged: boolean;
};
