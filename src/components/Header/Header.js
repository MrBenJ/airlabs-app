import React from 'react';
import { Link } from 'react-router-dom';

import style from './style';

export default function Header() {
  return (
    <div className={style}>
      <Link to="/">
        <h1 className="title">
          Vimaviewer
        </h1>
      </Link>

      <Link to="/settings">Settings</Link>
    </div>
  );
}
