import React from 'react';
import './taskbar.css'

function Taskbar() {
    return (
      <div className="taskbar">
        <div className="logo">Devlink Marketplace</div>
        <div>
          <button className="button">Find Dev</button>
          <button className="button">Find Job</button>
          <button className="button">Login</button>
          <button className="button">Create Account</button>
        </div>
      </div>
    );
  }

export default Taskbar;
