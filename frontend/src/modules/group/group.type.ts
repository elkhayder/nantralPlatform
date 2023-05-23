export type Group = {
  id: number;
  name: string;
  shortName: string;
  slug: string;
  url: string;
  icon?: string;
  groupType: PartialGroup;
  parent?: PartialGroup;
  creationYear?: number;
  archived: boolean;
  private: boolean;
  public: boolean;
  summary: string;
  description: string;
  meetingPlace: string;
  meetingHour: string;
  banner: string;
  video1: string;
  video2: string;
  isAdmin: boolean;
  isMember: boolean;
  lockMemberships: boolean;
};

export type PartialGroup = Pick<
  Group,
  'id' | 'name' | 'shortName' | 'slug' | 'url' | 'icon'
>;
