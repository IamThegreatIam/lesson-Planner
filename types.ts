
export interface Lesson {
  id: string;
  name: string;
}

export interface SubStrand {
  id: string;
  name: string;
  lessons: Lesson[];
}

export interface Strand {
  id: string;
  name: string;
  subStrands: SubStrand[];
}

export interface GradeCurriculum {
  id: string;
  name: string; // e.g., "Grade 7"
  strands: Strand[];
}

export interface UploadedFile {
  name: string;
  type: string;
  data: string; // Base64 string
}

export interface LessonPlanInput {
  teacherName: string;
  schoolName: string;
  date: string;
  subject: string;
  grade: string;
  term: string;
  roll: number;
  strand: string;
  subStrand: string;
  lesson: string;
  additionalText?: string;
  files?: UploadedFile[];
}

export interface GeneratedLessonPlan {
  content: string; // The raw markdown/text content from AI
  structured: LessonPlanInput;
}

export interface User {
  name: string;
  email: string;
  schoolName?: string;
  phone?: string;
  location?: string;
  role?: 'admin' | 'teacher';
}

export interface UserActivity {
  id: string;
  name: string;
  email: string;
  school: string;
  lastLogin: string;
  status: 'active' | 'inactive';
}

export interface SavedItem {
  id: string;
  timestamp: number;
  title: string;
  subject: string;
  grade: string;
  data: GeneratedLessonPlan;
  notes: string | null;
  questions: string | null;
}
