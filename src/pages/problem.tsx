import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import './github-markdown.css';
import * as API from '../service/api';
import Button from '@mui/material/Button';

function Problem() {
  const [problem, setProblem] = useState<ProblemDetail>();
  const [valid, setValid] = useState(false);
  const { pid } = useParams();
  useEffect(() => {
    if (pid === undefined) return;
    API.getProblem(parseInt(pid))
      .then((res) => {
        setProblem(res);
        setValid(true);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  if (!valid) return <div>题目不存在。</div>;
  return (
    <div>
      <h2 style={{ display: 'inline' }}>
        {pid}: {problem?.problem.title}
      </h2>
      <Button
        href={'/#/submit/' + pid}
        style={{ float: 'right', marginRight: '10%' }}
        variant="outlined"
      >
        提交答案
      </Button>
      <p>
        时间限制：{problem?.context.Runtime.TimeLimit}ms
        <br />
        内存限制：{problem?.context.Runtime.MemoryLimit}MB
        <br />
        进程数限制：{problem?.context.Runtime.NProcLimit}
      </p>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        className="markdown-body result"
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <SyntaxHighlighter
                // slow when loading language...
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {problem?.problem.statement ?? ''}
      </ReactMarkdown>
    </div>
  );
}

export default Problem;

// note: no html support because html inject is DANGEROUS
