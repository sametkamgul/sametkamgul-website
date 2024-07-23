const { default: TagManager } = require("react-gtm-module");

const sendEvent = (pageName) => {
  const tagManagerArgs = {
    dataLayer: {
      userId: "001",
      userProject: "project",
      page: pageName,
    },
    dataLayerName: "PageDataLayer",
  };

  if (TagManager) {
    TagManager.dataLayer(tagManagerArgs);
  }
};

export default { sendEvent };
