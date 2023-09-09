import MonacoEditor, { EditorProps } from '@monaco-editor/react';

interface CodeEditorProps {
  code: string;
  height?: string;
  onChange: EditorProps['onChange'];
  isFullScreen?: boolean;
}

const CodeEditor = ({
  code,
  onChange,
  height = '300px',
  isFullScreen = false,
}: CodeEditorProps) => {
  return (
    <MonacoEditor
      height={isFullScreen ? '70vh' : height}
      language='javascript'
      theme='vs-dark'
      value={code}
      onChange={onChange}
      options={{
        fontSize: 14,
        minimap: {
          enabled: false,
        },
      }}
    />
  );
};

export default CodeEditor;
