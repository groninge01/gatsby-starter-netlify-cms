import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import TrainingPagePreview from './preview-templates/TrainingPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('trainingen', TrainingPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
