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
    <section ref={scope} className="md:ml-32 md:pl-64 pt-24 md:px-20">
      <div className="opacity-0 text-primary cont-custom py-4 pl-10 mx-10 text-xl mb-10 md:text-4xl bg-fourth/40 rounded-xl">
        {title}
      </div>
      {body && (
        <div className="opacity-0 text-primary text-sm md:text-lg">{body}</div>
      )}
      <div className="opacity-0 text-primary text-sm md:text-lg px-4 md:px-14">
        {children}
      </div>
    </section>
  );
};

export default ContentLayout;
