import { GoogleGenAI } from "@google/genai";
import { LessonPlanInput } from "../types";

const SYSTEM_INSTRUCTION = `
You are an expert educational consultant and curriculum specialist for the Kenya Institute of Curriculum Development (KICD). 
Your task is to generate professional, high-quality, and curriculum-aligned lesson plans for Junior Secondary School (JSS) (Grades 7, 8, and 9) based on the Competency-Based Education (CBE) framework.

**Guidelines:**
1.  **Audience:** Professional Kenyan teacher. Tone: Formal, pedagogical, instructional.
2.  **Length:** The body content MUST be approximately 400 words.
3.  **Curriculum Alignment:** Strictly adhere to the Kenyan CBE curriculum for the selected subject (Mathematics or Pre-Technical Studies).
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
      - Use terminology relevant to ${inputs.subject}.
    `;

    // Add additional text context if provided
    if (inputs.additionalText) {
      promptText += `\n\n**Teacher's Additional Notes/Context:**\n${inputs.additionalText}\nPlease incorporate these specific notes into the lesson plan activities or resources where appropriate.`;
    }

    if (inputs.files && inputs.files.length > 0) {
      promptText += `\n\n**Attached Materials:**\nI have attached images or documents related to this lesson. Please analyze them and ensure the lesson plan (specifically the examples, exercises, or content delivery) aligns with the content in these attachments.`;
    }

    // Build the request parts
    const parts: any[] = [{ text: promptText }];

    // Add files if they exist
    if (inputs.files && inputs.files.length > 0) {
      inputs.files.forEach(file => {
        // Clean base64 string (remove data URL prefix if present)
        const cleanBase64 = file.data.split(',')[1] || file.data;
        parts.push({
          inlineData: {
            mimeType: file.type,
            data: cleanBase64
          }
        });
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        role: 'user',
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
      Based on the provided lesson plan, generate comprehensive "Board Notes" for students to copy into their notebooks.
      
      **CRITICAL REQUIREMENTS:**
      1.  **Length:** The notes MUST be between **400 and 500 words**. Do not generate short summaries. Provide detailed explanations.
      2.  **Format:** Structured exactly like a teacher writing on a blackboard.
      3.  **Style:** Direct, factual, clear, and explanatory. No teacher instructions like "Tell the class...".
      
      **STRICT STRUCTURE & EXAMPLE:**
      
      **TOPIC: [INSERT TOPIC NAME]**
      
      **1. INTRODUCTION / DEFINITION**
      *   **[Concept Name]:** [Detailed definition of the concept. Explain what it is, its origin, or its basic principle.]
      *   [Additional explanatory sentence to clarify the definition further.]
      
      **2. [KEY CONCEPTS / TYPES / CHARACTERISTICS]**
      *   **[Point 1]:** [State the point clearly]. [Follow with a detailed explanation of 1-2 sentences describing why this point is important or how it works].
      *   **[Point 2]:** [State the point]. [Detailed explanation...].
      *   **[Point 3]:** [State the point]. [Detailed explanation...].
      
      **3. DETAILED EXPLANATION**
      *   [Provide a deeper dive into the mechanics or details of the topic. Use bullet points to break down complex ideas into digestible parts for students.]
      *   [Ensure this section is substantial to meet the word count requirements.]
      
      **4. EXAMPLES / ILLUSTRATIONS**
      *   **Example 1:** [State the problem or scenario clearly]
          *   **Solution:** [Provide a step-by-step working or explanation of the solution]
      *   **Example 2:** [State a different problem or scenario]
          *   **Solution:** [Provide a step-by-step working or explanation]
      
      **5. SUMMARY / CONCLUSION**
      *   [A brief bullet point summarizing the main takeaway of the lesson.]

      **Content Source (Lesson Plan):**
      ${lessonPlan}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.5, // Lower temperature for more deterministic/factual output
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
      Based on the following lesson plan, generate 10 practice questions for students.
      
      **Requirements:**
      - **Quantity:** 10 Questions numbered 1-10.
      - **Types:** Mix of multiple choice, short answer, and one problem-solving/application question.
      - **Relevance:** Directly test the Specific Learning Outcomes from the lesson plan.
      - **Answer Key:** Include a "Marking Scheme" or "Answer Key" section at the very end of the output.
      
      **Lesson Plan Context:**
      ${lessonPlan}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
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