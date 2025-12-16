import React, { useState, useEffect, useRef } from 'react';
import { GradeCurriculum, LessonPlanInput, Strand, SubStrand, UploadedFile, User } from '../types';
import { SUBJECT_CURRICULA } from '../data/curriculum';
import { BookOpen, Layers, Upload, X, FileText, Image as ImageIcon, Sparkles } from 'lucide-react';

interface LessonFormProps {
  onSubmit: (data: LessonPlanInput) => void;
  isLoading: boolean;
  user: User | null;
}

const LessonForm: React.FC<LessonFormProps> = ({ onSubmit, isLoading, user }) => {
  const [formData, setFormData] = useState<LessonPlanInput>({
    teacherName: user?.name || '',
    schoolName: user?.schoolName || '',
    date: new Date().toISOString().split('T')[0],
    subject: 'Mathematics',
    grade: '',
    term: 'Term 1',
    roll: 40,
    strand: '',
    subStrand: '',
    lesson: '',
    additionalText: '',
    files: []
  });

  // Derived state for dropdown options
  const [activeCurriculum, setActiveCurriculum] = useState<GradeCurriculum[]>(SUBJECT_CURRICULA['Mathematics']);
  const [activeGradeData, setActiveGradeData] = useState<GradeCurriculum | null>(null);
  const [activeStrandData, setActiveStrandData] = useState<Strand | null>(null);
  const [activeSubStrandData, setActiveSubStrandData] = useState<SubStrand | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update defaults if user object changes (e.g. after updating profile)
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        teacherName: prev.teacherName || user.name,
        schoolName: prev.schoolName || user.schoolName || ''
      }));
    }
  }, [user]);

  useEffect(() => {
    const curriculum = SUBJECT_CURRICULA[formData.subject] || SUBJECT_CURRICULA['Mathematics'];
    setActiveCurriculum(curriculum);
    
    // Reset grade if it doesn't exist in new curriculum (unlikely but safe)
    if (formData.grade) {
       const grade = curriculum.find(g => g.name === formData.grade) || null;
       setActiveGradeData(grade);
       if (!grade) {
         setFormData(prev => ({ ...prev, grade: '', strand: '', subStrand: '', lesson: '' }));
       } else {
         // If grade exists, check if strand exists in new subject
         if (!grade.strands.find(s => s.name === formData.strand)) {
           setFormData(prev => ({ ...prev, strand: '', subStrand: '', lesson: '' }));
         }
       }
    }
  }, [formData.subject]);

  useEffect(() => {
    if (formData.grade) {
      const grade = activeCurriculum.find(g => g.name === formData.grade) || null;
      setActiveGradeData(grade);
      if (!grade?.strands.find(s => s.name === formData.strand)) {
         setFormData(prev => ({ ...prev, strand: '', subStrand: '', lesson: '' }));
      }
    }
  }, [formData.grade, activeCurriculum]);

  useEffect(() => {
    if (activeGradeData && formData.strand) {
      const strand = activeGradeData.strands.find(s => s.name === formData.strand) || null;
      setActiveStrandData(strand);
      if (!strand?.subStrands.find(s => s.name === formData.subStrand)) {
        setFormData(prev => ({ ...prev, subStrand: '', lesson: '' }));
      }
    } else {
      setActiveStrandData(null);
    }
  }, [activeGradeData, formData.strand]);

  useEffect(() => {
    if (activeStrandData && formData.subStrand) {
      const subStrand = activeStrandData.subStrands.find(s => s.name === formData.subStrand) || null;
      setActiveSubStrandData(subStrand);
      if (!subStrand?.lessons.find(l => l.name === formData.lesson)) {
        setFormData(prev => ({ ...prev, lesson: '' }));
      }
    } else {
      setActiveSubStrandData(null);
    }
  }, [activeStrandData, formData.subStrand]);

  const handleChange = (field: keyof LessonPlanInput, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: UploadedFile[] = [];
      
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        if (file.size > 10 * 1024 * 1024) { // 10MB limit
          alert(`File ${file.name} is too large. Maximum size is 10MB.`);
          continue;
        }

        const base64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });

        newFiles.push({
          name: file.name,
          type: file.type,
          data: base64
        });
      }

      setFormData(prev => ({
        ...prev,
        files: [...(prev.files || []), ...newFiles]
      }));
    }
    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files?.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-slate-100">
      <div className="bg-blue-600 px-6 py-4 border-b border-blue-700">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Create New Lesson Plan
        </h2>
        <p className="text-blue-100 text-sm mt-1">Fill in the details below. You can also upload notes or images to customize the plan.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
        
        {/* Table Layout for Inputs */}
        <div className="overflow-x-auto rounded-lg border border-slate-300">
          <table className="w-full text-sm text-left border-collapse">
            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-slate-200">
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200 w-32">Teacher</th>
                <td className="p-2 border-r border-slate-200">
                  <input 
                    type="text" 
                    required
                    className="w-full p-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Ms. Achieng"
                    value={formData.teacherName}
                    onChange={(e) => handleChange('teacherName', e.target.value)}
                  />
                </td>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200 w-32">School</th>
                <td className="p-2 border-r border-slate-200">
                   <input 
                    type="text" 
                    required
                    className="w-full p-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Nairobi JSS"
                    value={formData.schoolName}
                    onChange={(e) => handleChange('schoolName', e.target.value)}
                  />
                </td>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200 w-32">Date</th>
                <td className="p-2 border-r border-slate-200" colSpan={3}>
                   <input 
                    type="date" 
                    required
                    className="w-full p-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                  />
                </td>
              </tr>
              
              {/* Row 2 */}
              <tr>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200">Subject</th>
                <td className="p-2 border-r border-slate-200">
                  <select 
                    required
                    className="w-full p-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none bg-white font-medium text-slate-700"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                  >
                    {Object.keys(SUBJECT_CURRICULA).map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </td>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200">Grade</th>
                <td className="p-2 border-r border-slate-200">
                  <select 
                    required
                    className="w-full p-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none bg-white"
                    value={formData.grade}
                    onChange={(e) => handleChange('grade', e.target.value)}
                  >
                    <option value="">Select</option>
                    {activeCurriculum.map(g => (
                      <option key={g.id} value={g.name}>{g.name}</option>
                    ))}
                  </select>
                </td>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200">Term</th>
                <td className="p-2 border-r border-slate-200">
                   <select 
                    required
                    className="w-full p-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none bg-white"
                    value={formData.term}
                    onChange={(e) => handleChange('term', e.target.value)}
                  >
                    <option value="Term 1">Term 1</option>
                    <option value="Term 2">Term 2</option>
                    <option value="Term 3">Term 3</option>
                  </select>
                </td>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200">Roll</th>
                <td className="p-2">
                   <input 
                    type="number" 
                    required
                    min="1"
                    className="w-full p-2 border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                    value={formData.roll}
                    onChange={(e) => handleChange('roll', parseInt(e.target.value))}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Middle Section: Curriculum Selection */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-700 border-b border-slate-200 pb-2">
            Curriculum Selection
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Strand */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Strand</label>
              <select 
                required
                disabled={!activeGradeData}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100 disabled:text-slate-400 transition-all"
                value={formData.strand}
                onChange={(e) => handleChange('strand', e.target.value)}
              >
                <option value="">Select Strand</option>
                {activeGradeData?.strands.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Sub-Strand */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Sub-strand</label>
              <select 
                required
                disabled={!activeStrandData}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100 disabled:text-slate-400 transition-all"
                value={formData.subStrand}
                onChange={(e) => handleChange('subStrand', e.target.value)}
              >
                <option value="">Select Sub-strand</option>
                {activeStrandData?.subStrands.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Lesson */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Specific Lesson</label>
              <select 
                required
                disabled={!activeSubStrandData}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100 disabled:text-slate-400 transition-all"
                value={formData.lesson}
                onChange={(e) => handleChange('lesson', e.target.value)}
              >
                <option value="">Select Lesson</option>
                {activeSubStrandData?.lessons.map(l => (
                  <option key={l.id} value={l.name}>{l.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* New Section: Context & Materials */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              Context & Materials <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Optional</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">Paste Notes or Content</label>
              <textarea 
                className="w-full h-32 px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm placeholder:text-slate-400"
                placeholder="Paste any specific text, notes, or classroom context here..."
                value={formData.additionalText}
                onChange={(e) => handleChange('additionalText', e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">Upload Images or PDF</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 rounded-lg h-32 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 hover:border-blue-400 transition-colors"
              >
                <Upload className="w-8 h-8 text-slate-400 mb-2" />
                <span className="text-sm text-slate-500 font-medium">Click to upload files</span>
                <span className="text-xs text-slate-400">PDF, JPG, PNG (Max 10MB)</span>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept=".pdf,image/*" 
                  multiple 
                  className="hidden" 
                />
              </div>
              
              {/* File List */}
              {formData.files && formData.files.length > 0 && (
                <div className="space-y-2 mt-2">
                  {formData.files.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-slate-50 px-3 py-2 rounded border border-slate-200 text-sm">
                      <div className="flex items-center gap-2 truncate">
                        {file.type.includes('pdf') ? <FileText className="w-4 h-4 text-red-500" /> : <ImageIcon className="w-4 h-4 text-blue-500" />}
                        <span className="truncate max-w-[200px]">{file.name}</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => removeFile(idx)}
                        className="text-slate-400 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex justify-end">
          <button 
            type="submit" 
            disabled={isLoading}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Thinking...
              </>
            ) : (
              <>
                Generate Plan
                <Layers className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LessonForm;