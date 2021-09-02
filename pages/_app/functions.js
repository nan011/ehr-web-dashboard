export const modalUpdateHandler = (modalDataList, action) => {
  let newDataList = [...modalDataList];
  switch (action.type) {
    case "add":
      newDataList = [
        ...newDataList,
        {
          component: action.data.component,
          isVisible: true,
        },
      ];
      break;
    case "close":
      if (newDataList.length > 0) {
        const lastRaws = newDataList[newDataList.length - 1];
        lastRaws.isVisible = false;
      }
      break;
    case "pop":
      if (newDataList.length > 0) {
        newDataList.pop();
      }
      break;
    default:
      throw new Error(`Action ${action.type} is unknown`);
  }

  return newDataList;
};
