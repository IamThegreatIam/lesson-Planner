
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { LessonPlanInput } from "../types";

const SYSTEM_INSTRUCTION = `
You are an expert educational consultant and curriculum specialist for the Kenya Institute of Curriculum Development (KICD). 
Your task is to generate professional, high-quality, and curriculum-aligned lesson plans for Junior Secondary School (JSS) (Grades 7, 8, and 9) based on the Competency-Based Education (CBE) framework.

**Guidelines:**
1.  **Audience:** Professional Kenyan teacher. Tone: Formal, pedagogical, instructional.
2.  **Length:** The body content MUST be approximately 400 words.
3.  **Curriculum Alignment:** Strictly adhere to the Kenyan CBE curriculum for the selected subject.
4.  **Core Competencies:** Explicitly embed: Communication/Collaboration, Critical Thinking/Problem Solving, Creativity, Digital Literacy, Learning to Learn, Citizenship, Self-Efficacy.
5.  **Values:** Integrate: Respect, Unity, Responsibility, Patriotism, Peace, Love, Integrity, Social Justice.

**Format (Markdown):**
Do NOT output the header table (Teacher, School, etc.). Start directly with "Lesson Identification".

**Structure (Strictly follow this):**

### Lesson Identification
*   **Strand:** [Strand Name]
*   **Sub-strand:** [Substrand Name]
*   **Lesson Number:** [Lesson Name]

### Specific Learning Outcomes
By the end of the lesson, the learner should be able to:
1. [Outcome 1]
2. [Outcome 2]
3. [Outcome 3]

### Key Inquiry Questions
*   [Question 1]
*   [Question 2]

### Learning Resources
[List 4-6 resources e.g. textbooks, manipulatives, digital tools, real objects]

### Introduction (5 minutes)
[Engaging hook/starter. Connect to prior knowledge.]

### Lesson Development (25 minutes)
**Step 1:** [Activity Name]
[Description of activity without "Teacher" prefix. What learners do.]

**Step 2:** [Activity Name]
[Description. Group work, individual tasks, etc.]

**Step 3:** [Activity Name]
[Description. Deepening understanding.]

### Extended Activities
[2-3 differentiated activities: Extension, Remedial, Real-world application]

### Conclusion (5 minutes)
[Summary, assessment check, reflection]

### Reflection
[Space for teacher reflection]
`;

export const generateLessonPlan = async (inputs: LessonPlanInput): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construct the text prompt
    let promptText = `
      Generate a JSS ${inputs.subject} lesson plan.
      
      **Input Data:**
      - Subject: ${inputs.subject}
      - Grade: ${inputs.grade}
      - Term: ${inputs.term}
      - Strand: ${inputs.strand}
      - Sub-strand: ${inputs.subStrand}
      - Lesson Topic: ${inputs.lesson}
      - Class Size: ${inputs.roll} students
      
      **Requirements:**
      - Activities must be age-appropriate for ${inputs.grade} in Kenya.
      - Use ACTIVE LEARNING and CONSTRUCTIVIST approaches.
      - Include ASSESSMENT FOR LEARNING strategies.
      - Ensure the "Lesson Development" section is detailed and instructional.
    `;

    if (inputs.additionalText) {
      promptText += `\n\n**Teacher's Additional Notes:**\n${inputs.additionalText}`;
    }

    const parts: any[] = [{ text: promptText }];

    if (inputs.files && inputs.files.length > 0) {
      inputs.files.forEach(file => {
        const cleanBase64 = file.data.split(',')[1] || file.data;
        parts.push({
          inlineData: {
            mimeType: file.type,
            data: cleanBase64
          }
        });
      });
    }

    // Fix: Using correct GenerateContentResponse type and removing unnecessary role: 'user'
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: parts
      },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    if (response.text) {
      return response.text;
    } else {
      throw new Error("No content generated");
    }
  } catch (error) {
    console.error("Error generating lesson plan:", error);
    throw error;
  }
};

export const generateLessonNotes = async (lessonPlan: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Based on the provided lesson plan, generate comprehensive "Board Notes" for students to copy.
      Length: 400-500 words. Structure with Topics, Definitions, Detailed points, and Examples.
      Content:
      ${lessonPlan}
    `;

    // Fix: Using correct GenerateContentResponse type
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.5,
      }
    });

    return response.text || "Failed to generate notes.";
  } catch (error) {
    console.error("Error generating notes:", error);
    throw error;
  }
};

export const generatePracticeQuestions = async (lessonPlan: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Generate 10 practice questions (with answers at the end) based on this lesson plan:
      ${lessonPlan}
    `;

    // Fix: Using correct GenerateContentResponse type
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Failed to generate questions.";
  } catch (error) {
    console.error("Error generating questions:", error);
    throw error;
  }
};
