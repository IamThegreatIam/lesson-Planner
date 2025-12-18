import { GradeCurriculum } from '../types';
import { SUBJECT_CURRICULA } from '../data/curriculum';

const STORAGE_KEY = 'lessonPlannerCurriculum';

// Fetch all curriculum data (merged from defaults and local storage)
export const getCurricula = (): Record<string, GradeCurriculum[]> => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored curriculum", e);
    }
  }
  // If no custom data exists, return the default static data
  return SUBJECT_CURRICULA;
};

// Save the entire curriculum object to local storage
export const saveCurricula = (data: Record<string, GradeCurriculum[]>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Add a new Subject
export const addNewSubject = (subjectName: string): boolean => {
  const current = getCurricula();
  // Check if subject already exists (case insensitive)
  const existingKey = Object.keys(current).find(k => k.toLowerCase() === subjectName.toLowerCase());
  
  if (existingKey) return false;

  current[subjectName] = []; // Initialize with empty grades
  saveCurricula(current);
  return true;
};

// Add a new Grade to a Subject
export const addNewGrade = (subjectName: string, gradeName: string): boolean => {
  const current = getCurricula();
  const subjectCurriculum = current[subjectName];

  if (!subjectCurriculum) return false;

  // Check if grade already exists
  if (subjectCurriculum.find(g => g.name.toLowerCase() === gradeName.toLowerCase())) {
    return false;
  }

  // Create new grade structure
  const newGrade: GradeCurriculum = {
    id: gradeName.toLowerCase().replace(/\s+/g, '-'),
    name: gradeName,
    strands: [] // Empty strands initially - can be filled via AI generation or further editing later
  };

  current[subjectName].push(newGrade);
  
  // Sort grades alphanumerically if possible, otherwise just push
  current[subjectName].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  saveCurricula(current);
  return true;
};

// Delete a subject
export const deleteSubject = (subjectName: string) => {
    const current = getCurricula();
    delete current[subjectName];
    saveCurricula(current);
};

// Delete a grade
export const deleteGrade = (subjectName: string, gradeId: string) => {
    const current = getCurricula();
    if (current[subjectName]) {
        current[subjectName] = current[subjectName].filter(g => g.id !== gradeId);
        saveCurricula(current);
    }
};
