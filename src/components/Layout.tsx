import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          {/* Add navigation items */}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
