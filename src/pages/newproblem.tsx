import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FileIcon from '@mui/icons-material/AttachFile';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import './github-markdown.css';
import * as API from '../service/api';

const notice = `## 文件构成

\`\`\`
  .
├── config.json            # 题目配置信息
├── data                   # 数据目录
│   ├── input              # 输入数据
│   │   ├── (x).input      # 第 x 组输入数据
│   │   └── ...
│   └── output             # 输出数据
│       ├── (x).output     # 第 x 组输出数据
│       └── ...
└── judge                  # 评测脚本目录
    ├── c.Makefile         #(optional) 自定义评测脚本
    ├── prebuild.Makefile  #(optional) 题目初始化脚本
    └── ...
\`\`\`

## 详细说明

### 题目配置信息

\`\`\`json5;
{
  "Runtime": {
    // 运行时配置
    "TimeLimit": 1000, // 时间限制 (ms)
      "MemoryLimit": 16, // 内存限制 (MB)
        "NProcLimit": 1;     // 进(线)程 限制
  },
  "Languages": [
    { "Lang": "c", "Type": "custom", "Script": "XYZ.Makefile", "Cmp": "" },
    { "Lang": "cpp", "Type": "default", "Script": "", "Cmp": "NCMP" }
  ], // 支持的语言
    "Tasks": [
      // 评测点信息
      { "Id": 1, "Points": 25 }, // 第一个评测点，分值 25 分，使用 ./data/1.? 为测试数据
      { "Id": 2, "Points": 25 },
      { "Id": 3, "Points": 25 },
      { "Id": 4, "Points": 25 }
    ];
}
\`\`\`
`;

function Newproblem() {
  const [role, setRole] = useState<number>();
  const [title, setTitle] = useState('');
  const [statement, setStatement] = useState('');
  const { pid } = useParams();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) return;
    const jwtrole = (jwtDecode(token) as Token).role;
    setRole(jwtrole);
    if (pid !== undefined) {
      setTitle('');
      setStatement('');
      // TODO
    }
  }, []);

  const handleSubmit = () => {
    const files = (document?.querySelector('#problemzip') as HTMLInputElement)
      .files;
    let problem: File | undefined = undefined;
    if (files !== null) problem = files[0];
    const token = localStorage.getItem('token');
    if (token === null) return;
    API.updateProblem({
      token: token,
      file: problem,
      pid: pid ? parseInt(pid) : 0,
      title: '',
      statement: '',
      is_enabled: true,
    }).catch((err) => {
      alert(err);
    });
  };

  if (role !== 30)
    return (
      <div>
        对不起，您不是管理员，无权创建题目！<a href="/">返回主页</a>
      </div>
    );
  else
    return (
      <div style={{ marginLeft: 20 }}>
        <h2>上传题目</h2>
        <p>数据压缩包注意事项： </p>
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
          {notice}
        </ReactMarkdown>
        <form onSubmit={handleSubmit}>
          <Button variant="contained" component="label" endIcon={<FileIcon />}>
            选择zip文件
            <input hidden accept=".zip" type="file" id="problemzip" />
          </Button>
          <br />
          <br />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            上传
          </Button>
        </form>
      </div>
    );
}

export default Newproblem;
