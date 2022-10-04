import * as React from 'react';
import { useState, useCallback } from 'react';
import { styled } from '@mui/system';

const StyledSearch = styled('div')`
  /* display: flex;
  flex-direction: column; */
`;

const StyledInputElement = styled('input')`
  width: 260px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 320px;
    transition: width 200ms ease-out;
  }
`;

export default function SearchBar(): React.ReactElement {
  const [search, setSearch] = useState('');
  const changeSearch = useCallback((e: string) => {
    setSearch(e);
  }, []);

  return (
    <StyledSearch sx={{ zIndex: 100000 }}>
      <StyledInputElement
        placeholder="搜索题号或题目名"
        onChange={(e) => {
          changeSearch(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            location.href = '/#/search/' + search;
          }
        }}
      />
    </StyledSearch>
  );
}
