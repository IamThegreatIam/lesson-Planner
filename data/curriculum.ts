
import { GradeCurriculum } from '../types';
import { MATHS_CURRICULUM } from './math';
import { PRE_TECHNICAL_CURRICULUM } from './pre_technical';
import { SOCIAL_STUDIES_CURRICULUM } from './social_studies';
import { KISWAHILI_CURRICULUM } from './kiswahili';
import { CRE_CURRICULUM } from './cre';
import { AGRICULTURE_CURRICULUM } from './agriculture';
import { CREATIVE_ARTS_CURRICULUM } from './creative_arts';
import { INTEGRATED_SCIENCE_CURRICULUM } from './science';
import { ENGLISH_CURRICULUM } from './english';
import { IRE_CURRICULUM } from './ire';

export const SUBJECT_CURRICULA: Record<string, GradeCurriculum[]> = {
  "Mathematics": MATHS_CURRICULUM,
  "Pre-Technical Studies": PRE_TECHNICAL_CURRICULUM,
  "Social Studies": SOCIAL_STUDIES_CURRICULUM,
  "Kiswahili": KISWAHILI_CURRICULUM,
  "CRE": CRE_CURRICULUM,
  "Agriculture": AGRICULTURE_CURRICULUM,
  "Creative Arts": CREATIVE_ARTS_CURRICULUM,
  "Integrated Science": INTEGRATED_SCIENCE_CURRICULUM,
  "English": ENGLISH_CURRICULUM,
  "IRE": IRE_CURRICULUM
};

export const CURRICULUM_DATA = MATHS_CURRICULUM;
