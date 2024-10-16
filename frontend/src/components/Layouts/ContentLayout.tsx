import React from "react";
import { useFading } from "../../animation/utils";
import { useScrollToTop } from "../utils";

interface ContentLayoutProps {
  title: string;
  body?: string;
  children?: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({
  title,
  body,
  children,
}) => {
  useScrollToTop();

  const { scope } = useFading();

  return (
    <section
      ref={scope}
      className="p-5 py-20 mt-6 md:py-5 flex space-y-4 flex-col font-sans md:m-24 md:pl-64 xl:m-44"
    >
      <div className="opacity-0 text-primary cont-custom py-4 pl-10 mb-4 text-xl md:text-4xl bg-fourth/40 rounded-xl">
        {title}
      </div>
      {body && (
        <div className="opacity-0 text-primary text-sm md:text-lg">{body}</div>
      )}
      <div>{children}</div>
    </section>
  );
};

export default ContentLayout;
