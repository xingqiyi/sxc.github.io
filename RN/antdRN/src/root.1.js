import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Launch from "./components/Launch";
import Register from "./components/Register";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Login3 from "./components/Login3";
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox
} from "react-native-router-flux";
import Error from "./components/Error";
import Home from "./components/Home";
import TabView from "./components/TabView";
import TabIcon from "./components/TabIcon";
import EchoView from "./components/EchoView";
import MessageBar from "./components/MessageBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  tabBarStyle: {
    backgroundColor: "#eee"
  },
  tabBarSelectedItemStyle: {
    backgroundColor: "#ddd"
  }
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  };
};
const getSceneStyle = () => ({
  backgroundColor: "white",
  shadowOpacity: 1,
  shadowRadius: 3
});

const Navigation = () =>
  <View style={{ flex: 1 }}>
    <Router
      createReducer={reducerCreate}
      tintColor="red"
      getSceneStyle={getSceneStyle}
    >
      <Modal hideNavBar>
        <Lightbox
          leftButtonTextStyle={{ color: "green" }}
          backButtonTextStyle={{ color: "red" }}
        >
          <Stack hideNavBar hideTabBar titleStyle={{ alignSelf: "center" }}>
            <Scene
              key="echo"
              back
              clone
              component={EchoView}
              getTitle={({ navigation }) => navigation.state.key}
            />
            <Scene key="register" back>
              <Scene key="_register" component={Register} title="Register" />
              <Scene key="register2" component={Register} title="Register2" />
              <Scene
                key="home"
                component={Home}
                title="Replace"
                type={ActionConst.REPLACE}
              />
            </Scene>
            <Scene key="launch" component={Launch} title="Launch" initial />
            <Drawer contentComponent={TabView}>
              <Tabs
                key="tabbar"
                gestureEnabled={false}
                showLabel={false}
                tabs
                tabBarStyle={styles.tabBarStyle}
                activeBackgroundColor="#ddd"
              >
                <Stack
                  key="tab1"
                  title="Tab #1"
                  tabBarLabel="TAB #1"
                  icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: "green" }}
                  titleStyle={{ color: "white", alignSelf: "center" }}
                >
                  <Scene
                    key="tab1_1"
                    component={TabView}
                    title="Tab #1_1"
                    onRight={() => alert("Right button")}
                    rightTitle="Right"
                  />
                  <Scene
                    key="tab1_2"
                    component={TabView}
                    title="Tab #1_2"
                    back
                    titleStyle={{ color: "black", alignSelf: "center" }}
                  />
                </Stack>
                <Scene key="tab2" initial title="Tab #2" icon={TabIcon}>
                  <Scene
                    key="tab2_1"
                    component={TabView}
                    title="Tab #2_1"
                    renderRightButton={() => <Text>Right</Text>}
                  />
                  <Scene
                    key="tab2_2"
                    component={TabView}
                    title="Tab #2_2"
                    onBack={() => alert("onBack button!")}
                    backTitle="Back!"
                    panHandlers={null}
                  />
                </Scene>
                <Scene
                  key="tab3"
                  component={TabView}
                  title="Tab #3"
                  icon={TabIcon}
                  rightTitle="Right3"
                  onRight={() => {}}
                />
                <Scene
                  key="tab4"
                  component={TabView}
                  title="Tab #4"
                  hideNavBar
                  icon={TabIcon}
                />
                <Scene
                  key="tab5"
                  component={TabView}
                  title="Tab #5"
                  icon={TabIcon}
                />
              </Tabs>
            </Drawer>
          </Stack>
          <Scene key="error" component={Error} />
        </Lightbox>
        <Stack key="login" titleStyle={{ alignSelf: "center" }}>
          <Scene
            component={Login}
            title="Login"
            key="loginModal"
            onExit={() => console.log("onExit")}
            leftTitle="Cancel"
            onLeft={Actions.pop}
          />
          <Scene
            key="loginModal2"
            component={Login2}
            title="Login2"
            backTitle="Back"
            panHandlers={null}
            duration={1}
          />
          <Scene
            key="loginModal3"
            hideNavBar
            component={Login3}
            title="Login3"
            panHandlers={null}
            duration={1}
          />
        </Stack>
      </Modal>
    </Router>
    <MessageBar />
  </View>;

export default Navigation;
