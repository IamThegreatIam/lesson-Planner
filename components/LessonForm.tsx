
import React, { useState, useEffect, useRef } from 'react';
import { GradeCurriculum, LessonPlanInput, Strand, SubStrand, UploadedFile, User } from '../types';
import { getCurricula } from '../services/curriculumStore';
import { BookOpen, Layers, Upload, X, FileText, Image as ImageIcon, Sparkles } from 'lucide-react';

interface LessonFormProps {
  onSubmit: (data: LessonPlanInput) => void;
  isLoading: boolean;
  user: User | null;
}

const LessonForm: React.FC<LessonFormProps> = ({ onSubmit, isLoading, user }) => {
  const [allCurricula, setAllCurricula] = useState<Record<string, GradeCurriculum[]>>(getCurricula());

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

  const [activeCurriculum, setActiveCurriculum] = useState<GradeCurriculum[]>([]);
  const [activeGradeData, setActiveGradeData] = useState<GradeCurriculum | null>(null);
  const [activeStrandData, setActiveStrandData] = useState<Strand | null>(null);
  const [activeSubStrandData, setActiveSubStrandData] = useState<SubStrand | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAllCurricula(getCurricula());
  }, []);

  // Sync with user profile on load or profile change
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        teacherName: user.name,
        schoolName: user.schoolName || prev.schoolName
      }));
    }
  }, [user]);

  useEffect(() => {
    const curriculum = allCurricula[formData.subject] || [];
    setActiveCurriculum(curriculum);
  }, [formData.subject, allCurricula]);

  useEffect(() => {
    if (formData.grade) {
      setActiveGradeData(activeCurriculum.find(g => g.name === formData.grade) || null);
    }
  }, [formData.grade, activeCurriculum]);

  useEffect(() => {
    if (activeGradeData && formData.strand) {
      setActiveStrandData(activeGradeData.strands.find(s => s.name === formData.strand) || null);
    }
  }, [activeGradeData, formData.strand]);

  useEffect(() => {
    if (activeStrandData && formData.subStrand) {
      setActiveSubStrandData(activeStrandData.subStrands.find(s => s.name === formData.subStrand) || null);
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
        const base64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
        newFiles.push({ name: file.name, type: file.type, data: base64 });
      }
      setFormData(prev => ({ ...prev, files: [...(prev.files || []), ...newFiles] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const hasStructure = activeGradeData && activeGradeData.strands.length > 0;

  return (
    <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-slate-100">
      <div className="bg-blue-600 px-6 py-4 border-b border-blue-700">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Create New Lesson Plan
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
        <div className="overflow-x-auto rounded-lg border border-slate-300">
          <table className="w-full text-sm text-left border-collapse">
            <tbody>
              <tr className="border-b border-slate-200">
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200 w-32">Teacher</th>
                <td className="p-2 border-r border-slate-200">
                  <input type="text" required className="w-full p-2 border border-slate-300 rounded outline-none" value={formData.teacherName} onChange={(e) => handleChange('teacherName', e.target.value)} />
                </td>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200 w-32">School</th>
                <td className="p-2 border-r border-slate-200">
                   <input type="text" required className="w-full p-2 border border-slate-300 rounded outline-none" value={formData.schoolName} onChange={(e) => handleChange('schoolName', e.target.value)} />
                </td>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200 w-32">Date</th>
                <td className="p-2 col-span-3">
                   <input type="date" required className="w-full p-2 border border-slate-300 rounded outline-none" value={formData.date} onChange={(e) => handleChange('date', e.target.value)} />
                </td>
              </tr>
              <tr>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200">Subject</th>
                <td className="p-2 border-r border-slate-200">
                  <select required className="w-full p-2 border border-slate-300 rounded bg-white" value={formData.subject} onChange={(e) => handleChange('subject', e.target.value)}>
                    {Object.keys(allCurricula).map(subject => <option key={subject} value={subject}>{subject}</option>)}
                  </select>
                </td>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200">Grade</th>
                <td className="p-2 border-r border-slate-200">
                  <select required className="w-full p-2 border border-slate-300 rounded bg-white" value={formData.grade} onChange={(e) => handleChange('grade', e.target.value)}>
                    <option value="">Select</option>
                    {activeCurriculum.map(g => <option key={g.id} value={g.name}>{g.name}</option>)}
                  </select>
                </td>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200">Term</th>
                <td className="p-2 border-r border-slate-200">
                   <select required className="w-full p-2 border border-slate-300 rounded bg-white" value={formData.term} onChange={(e) => handleChange('term', e.target.value)}>
                    <option value="Term 1">Term 1</option><option value="Term 2">Term 2</option><option value="Term 3">Term 3</option>
                  </select>
                </td>
                <th className="bg-slate-100 p-3 font-semibold text-slate-700 border-r border-slate-200">Roll</th>
                <td className="p-2">
                   <input type="number" required min="1" className="w-full p-2 border border-slate-300 rounded outline-none" value={formData.roll} onChange={(e) => handleChange('roll', parseInt(e.target.value))} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-700 border-b pb-2">Curriculum Selection</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Strand</label>
              {hasStructure ? (
                <select required className="w-full px-3 py-2 border rounded-md" value={formData.strand} onChange={(e) => handleChange('strand', e.target.value)}>
                  <option value="">Select Strand</option>
                  {activeGradeData?.strands.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                </select>
              ) : <input type="text" placeholder="Enter Strand" className="w-full px-3 py-2 border rounded-md" value={formData.strand} onChange={(e) => handleChange('strand', e.target.value)} />}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Sub-strand</label>
              {hasStructure ? (
                <select required className="w-full px-3 py-2 border rounded-md" value={formData.subStrand} onChange={(e) => handleChange('subStrand', e.target.value)}>
                  <option value="">Select Sub-strand</option>
                  {activeStrandData?.subStrands.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                </select>
              ) : <input type="text" placeholder="Enter Sub-strand" className="w-full px-3 py-2 border rounded-md" value={formData.subStrand} onChange={(e) => handleChange('subStrand', e.target.value)} />}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Specific Lesson</label>
              {hasStructure ? (
                <select className="w-full px-3 py-2 border rounded-md" value={formData.lesson} onChange={(e) => handleChange('lesson', e.target.value)}>
                  <option value="">Select Lesson</option>
                  {activeSubStrandData?.lessons.map(l => <option key={l.id} value={l.name}>{l.name}</option>)}
                </select>
              ) : <input type="text" required placeholder="Enter Lesson" className="w-full px-3 py-2 border rounded-md" value={formData.lesson} onChange={(e) => handleChange('lesson', e.target.value)} />}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-700 border-b pb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-yellow-500" />Context & Materials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="block text-sm font-medium">Paste Notes or Content</label>
              <textarea className="w-full h-32 px-3 py-2 border rounded-md text-sm" placeholder="Paste specific text context here..." value={formData.additionalText} onChange={(e) => handleChange('additionalText', e.target.value)} />
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-medium">Upload Images or PDF</label>
              <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-slate-300 rounded-lg h-32 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
                <Upload className="w-8 h-8 text-slate-400 mb-2" /><span className="text-sm text-slate-500">Click to upload files</span>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,image/*" multiple className="hidden" />
              </div>
              {formData.files && formData.files.length > 0 && (
                <div className="space-y-2 mt-2">
                  {formData.files.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-slate-50 px-3 py-2 rounded border border-slate-200 text-sm">
                      <span className="truncate">{file.name}</span>
                      <button type="button" onClick={() => handleChange('files', formData.files?.filter((_, i) => i !== idx))} className="text-slate-400 hover:text-red-500"><X className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg disabled:opacity-50 flex items-center gap-2">
            {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <><Layers className="w-5 h-5" /> Generate Plan</>}
          </button>
        </div>
      </form>
    </div>
  );
};

const Loader2 = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export default LessonForm;
