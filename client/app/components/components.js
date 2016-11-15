import angular from "angular";
import createPickup from "./_createPickup/createPickup";
import groupDetail from "./groupDetail/groupDetail";
import home from "./home/home";
import login from "./login/login";
import pickupList from "./_pickupList/pickupList";
import signup from "./signup/signup";
import storeDetail from "./storeDetail/storeDetail";
import storeList from "./_storeList/storeList";
import topbar from "./_topbar/topbar";
import userList from "./_userList/userList";
import groupMenu from "./_groupMenu/groupMenu";
import languageChooser from "./_languageChooser/languageChooser";
import createStore from "./_createStore/createStore";

let componentModule = angular.module("app.components", [
  createPickup,
  groupDetail,
  home,
  login,
  pickupList,
  signup,
  storeDetail,
  storeList,
  topbar,
  userList,
  groupMenu,
  languageChooser,
  createStore
])

        .name;

export default componentModule;
