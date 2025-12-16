import { LessonPlanInput } from "../types";

export const exportToWord = (data: LessonPlanInput, content: string, title: string = "Lesson Plan") => {
  // Simple HTML to Doc export
  const headerHtml = `
    <table border="1" style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
      <tr>
        <td style="padding: 5px; font-weight: bold;">Teacher</td>
        <td style="padding: 5px;">${data.teacherName}</td>
        <td style="padding: 5px; font-weight: bold;">School</td>
        <td style="padding: 5px;">${data.schoolName}</td>
        <td style="padding: 5px; font-weight: bold;">Date</td>
        <td style="padding: 5px;">${data.date}</td>
      </tr>
      <tr>
        <td style="padding: 5px; font-weight: bold;">Subject</td>
        <td style="padding: 5px;">${data.subject}</td>
        <td style="padding: 5px; font-weight: bold;">Grade</td>
        <td style="padding: 5px;">${data.grade}</td>
        <td style="padding: 5px; font-weight: bold;">Term</td>
        <td style="padding: 5px;">${data.term}</td>
        <td style="padding: 5px; font-weight: bold;">Roll</td>
        <td style="padding: 5px;">${data.roll}</td>
      </tr>
    </table>
  `;

  // Convert Markdown-ish content to basic HTML for the Word doc
  // Note: This is a basic conversion. For production, a proper Markdown parser is recommended.
  let bodyHtml = content
    .replace(/\n/g, '<br/>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/### (.*?)(<br\/>|$)/g, '<h3>$1</h3>')
    .replace(/\* (.*?)(<br\/>|$)/g, '<li>$1</li>');

  const fullHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>${title}</title></head>
    <body>
      <h1 style="text-align: center;">JSS ${data.subject} ${title}</h1>
      ${headerHtml}
      ${bodyHtml}
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', fullHtml], {
    type: 'application/msword'
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  const safeTitle = title.replace(/\s+/g, '_');
  link.download = `${safeTitle}_${data.grade}_${data.subject.replace(/\s+/g, '_')}_${data.lesson.replace(/\s+/g, '_')}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToWhatsapp = (content: string) => {
  const text = encodeURIComponent(content);
  window.open(`https://wa.me/?text=${text}`, '_blank');
};