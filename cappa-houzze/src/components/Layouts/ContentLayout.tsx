import React from "react";

interface ContentLayoutProps {
  title: string;
  body: string;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default ContentLayout;
