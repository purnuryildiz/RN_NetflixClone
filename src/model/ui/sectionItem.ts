import {Movie} from '../data/moviesTypes';

interface SectionItemProps {
  sectionData: {id: number; title: string};
  moviesData: Movie[];
}
interface SectionTitleProps {
  title: string;
}

export type {SectionItemProps, SectionTitleProps};
