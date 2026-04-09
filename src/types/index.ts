export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  price: number;
  originalPrice: number;
  category: 'prelims' | 'mains' | 'foundation' | 'current-affairs' | 'pyq';
  image: string;
  badge?: string;
  modules?: CourseModule[];
  isPopular?: boolean;
  isNew?: boolean;
  enrollmentOpen: boolean;
}

export interface CourseModule {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
}

export interface TestSeries {
  id: string;
  title: string;
  description: string;
  tests: number;
  questions: number;
  price: number;
  originalPrice: number;
  features: string[];
  category: string;
}

export interface Topper {
  name: string;
  rank: number;
  year: number;
  image: string;
  testimonial: string;
  course: string;
}

export interface FreeResource {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  category: string;
}

export interface CurrentAffairsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  slug: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
