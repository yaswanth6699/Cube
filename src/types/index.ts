export type UserTypes = {
  name: string;
  description: string;
  id: string;
};

export type ContentImgTypes = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
};

export type SidebarTypes = {
  userList: UserTypes[];
  selectedUser: UserTypes;
  toggleSelectedUser: React.Dispatch<React.SetStateAction<UserTypes>>;
};
