export type ReactWithChildren<PropType = {}> = React.FC<
  {
    children: React.ReactElement | string;
  } & PropType
>;
