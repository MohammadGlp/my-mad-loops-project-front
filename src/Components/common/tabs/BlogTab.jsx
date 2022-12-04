import React from 'react';
import { TabPanel } from 'react-tabs';
import CommentsTab from './CommentsTab';
import CustomTab from './CustomTab';
import tabData from '../../../Core/services/Fake Service/BlogTabList';

const BlogTab = ({ blogId }) => {
  return (
    <CustomTab tabs={tabData}>
      <TabPanel>
        <CommentsTab id={blogId} />
      </TabPanel>
    </CustomTab>
  );
};

export default BlogTab;
