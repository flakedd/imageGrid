import * as React from "react";
import '../../css/index.css';

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({children }) => {
  return (
    <div className="page">
      {children}
    </div>
  );
};

export default Page;