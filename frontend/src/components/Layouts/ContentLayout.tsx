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
    <section ref={scope} className="md:ml-20 md:pl-64 pt-24 px-20 mx-auto">
      <div className="opacity-0 text-primary cont-custom py-4 pl-10 mb-10 text-xl md:text-4xl bg-fourth/40 rounded-xl">
        {title}
      </div>
      {body && (
        <div className="opacity-0 text-primary text-sm md:text-lg">{body}</div>
      )}
      <div className="opacity-0 text-primary text-sm md:text-lg max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default ContentLayout;
