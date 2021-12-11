import { GridContent } from '../../components/GridContent';

const content = {
  title: 'Error 404',
  html: '<p>Unfortunately, the page you are looking for was not found =(. <a href="/">Click to go back to the previous page.</a></p>',
};

export const PageNotFound = () => {
  return <GridContent title={content.title} html={content.html} />;
};
