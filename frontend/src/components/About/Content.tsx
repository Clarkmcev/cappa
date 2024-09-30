import About from "./About";
import ContentLayout from "../Layouts/ContentLayout";

function Content() {
  return <ContentLayout title="About me" children={<About />} />;
}

export default Content;
