export interface IActiveContext {
  isActive: boolean;
  setIsactive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPersonalInterface {
  userName: string;
}

export interface ITab {
  label: string | number;
  id: string | number;
}

export interface ITabProps {
  tabs: ITab[];
  selectedId: number | string;
  handleTabClick: (id: number | string) => void;
}

export interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
  description: string;
}

export interface IPostComponentProps {
  post: IPost | undefined;
}
