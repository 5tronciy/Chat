import { bindActionCreators } from "redux";
import addChat from "./actionCreators/action_add_chat";
import setCurrentChat from "./actionCreators/action_set_chat";
import setUser from "./actionCreators/action_set_user";

function mapDispatchToProps(component) {
  switch (component) {
    case "Chat":
      return function (dispatch) {
        return {
          change_current_chat: bindActionCreators(setCurrentChat, dispatch),
        };
      };
    case "ChatList":
      return function (dispatch) {
        return {
          change_user: bindActionCreators(setUser, dispatch),
        };
      };
    case "AddChat":
      return function (dispatch) {
        return {
          change_modal_state: bindActionCreators(addChat, dispatch),
        };
      };
    default:
      return undefined;
  }
}

export default mapDispatchToProps;
