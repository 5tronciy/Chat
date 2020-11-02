function mapStateToProps(component) {
  switch (component) {
    case "Chatlist": {
      return function (state) {
        return {
          chats: state.chats,
        };
      };
    }
    case "Chat": {
      return function (state) {
        return {
          currentUser: state.currentUser,
          chats: state.chats,
          currentPage: state.currentPage,
        };
      };
    }
    default:
      return undefined;
  }
}

export default mapStateToProps;
