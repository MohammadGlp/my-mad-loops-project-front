import React, { Component } from "react";
import RobotTextMessage from "../../common/Text-Message-Robot/robot-textmessage.component";
import "../Landing-Header/landing-robot.component.styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      droidX: 0,
      mouseX: 0,
      toTheRight: true,
      speed: 2,
      accelMod: 1,
    };
  }

  // Keep track of the mouse position.
  handleMouseMove(event) {
    this.setState({
      mouseX: event.pageX,
    });
  }

  // Speed Mod Bar
  handleSpeedChange(e) {
    if (parseFloat(e.target.value)) {
      this.setState({
        speed: e.target.value,
      });
    }
  }

  // Acceleration Mod Bar
  handleAccelChange(e) {
    if (parseFloat(e.target.value)) {
      this.setState({
        accelMod: e.target.value,
      });
    }
  }

  // Get moving!
  movement() {
    let { droidX, mouseX, speed, accelMod } = this.state;

    // Need a pretty strict if statement to make sure React doesn't end up in a
    // render loop with all the state changes / re-rendering going on.
    if (Math.abs(Math.round(droidX) - mouseX) !== 1) {
      let distance = mouseX - droidX;
      let acceleration = Math.abs(distance * accelMod) / 75;

      // Move to the right
      if (droidX < mouseX) {
        this.setState({
          droidX: droidX + speed * acceleration,
          toTheRight: true,
        });
      }

      // Move to the left
      else {
        this.setState({
          droidX: droidX - speed * acceleration,
          toTheRight: false,
        });
      }
    }
  }

  // Get some initial movement on first mount.
  componentWillMount() {
    this.setState({
      mouseX: 300,
    });
  }

  // Set up the mouse event listener and fire up the movement function.
  componentDidMount() {
    document.addEventListener("mousemove", (e) => this.handleMouseMove(e));
    setInterval(this.movement.bind(this), 1);
  }

  // Clean up.
  componentWillUnmount() {
    document.removeEventListener("mousemove", (e) => this.handleMouseMove(e));
  }

  // Away we go.
  render() {
    let { speed, accelMod, droidX, mouseX, toTheRight } = this.state;

    return (
      <div>
        <div
          className="bb8 xl:bottom-[65%] lg:bottom-[95%] md:bottom-[110%] sm:bottom-[105%]"
          style={{ WebkitTransform: `translateX(${droidX}px)` }}
        >
          <div
            className={
              "antennas absolute duration-200 left-[-44%] " +
              (toTheRight ? "right left-[-44%]" : " left-[4%]")
            }
            style={{
              WebkitTransform: `translateX(${
                (mouseX - droidX) / 25
              }px) rotateZ(${(mouseX - droidX) / 80}deg)`,
            }}
          >
            <div className="antenna short bg-lite-purple"></div>
            <div className="antenna long bg-lite-pink dark:bg-[#5DC8B2]"></div>
          </div>
          <div
            className="head md:w-[116px] md:h-[73px] md:ml-[-50px] md:top-[-56px] md:left-[14%] sm:w-[90px] sm:h-[65px] sm:ml-[-30px] sm:top-[-53px] sm:left-[14%] bg-slate-100 dark:bg-dark-secondary"
            style={{
              WebkitTransform: `translateX(${
                (mouseX - droidX) / 15
              }px) rotateZ(${(mouseX - droidX) / 25}deg)`,
            }}
          >
            <div className="stripe one absolute w-[100%] h-[7px] top-[3px] opacity-[0.8] z-[1] bg-lite-violet dark:bg-[#5DC8B2]"></div>
            <div className="stripe two absolute w-[100%] h-[4px] top-[14px] bg-deep-purple"></div>
            <div
              className={
                "eyes absolute block w-[100%] h-[100%] left-0 duration-300 " +
                (toTheRight ? "right" : "")
              }
            >
              <div className="eye one"></div>
              <div className="eye two"></div>
            </div>
            <div
              className={
                "stripe flex absolute w-[200px] h-[7px] bottom-[7px] left-[-38%] duration-300 detail " +
                (toTheRight ? "right left-[0]" : "")
              }
            >
              <div className="detail zero w-[2%] ml-[3px] bg-lite-purple"></div>
              <div className="detail zero w-[2%] ml-[3px] bg-lite-purple"></div>
              <div className="detail one w-[8%] ml-[3px] bg-lite-purple"></div>
              <div className="detail two w-[6%] ml-[5px] bg-lite-purple"></div>
              <div className="detail three w-[4%] h-[5px] ml-[45px] mt-[2px] bg-lite-purple"></div>
              <div className="detail four w-[10%] ml-[4px] bg-lite-purple"></div>
              <div className="detail five w-[2%] ml-[3px] bg-lite-purple"></div>
              <div className="detail five w-[2%] ml-[3px] bg-lite-purple"></div>
            </div>
            <div className="stripe absolute w-[100%] three h-[4px] bottom-[3px] opacity-[0.5] bg-deep-purple"></div>
          </div>
          <div
            className={"antennas absolute duration-150 right-[-115%]"}
            style={{
              WebkitTransform: `translateX(${
                (mouseX - droidX) / 25
              }px) rotateZ(${(mouseX - droidX) / 80}deg)`,
            }}
          >
            <div className="antenna short">
              <RobotTextMessage />
            </div>
          </div>
          <div
            className="ball md:w-56 md:h-56 sm:w-52 sm:h-52 bg-slate-100 dark:bg-dark-secondary rounded-[50%] overflow-hidden relative"
            style={{ WebkitTransform: `rotateZ(${droidX / 2}deg)` }}
          >
            <div className="lines one border border-[#897ae8] rounded-[50%] w-[400px] h-[400px] opacity-[0.6] absolute"></div>
            <div className="lines two border border-[#897ae8] rounded-[50%] w-[400px] h-[400px] opacity-[0.6] absolute top-[-10px] left-[-230px]"></div>
            <div className="lines three border border-[#897ae8] rounded-[50%] w-[400px] h-[400px] opacity-[0.6] absolute top-[-10px] left-[-350px]"></div>
            <div className="lines four border border-[#897ae8] rounded-[50%] w-[400px] h-[400px] opacity-[0.6] absolute top-[-10px] left-[-380px]"></div>
            <div className="ring one bg-lite-violet dark:bg-[#5DC8B2]"></div>
            <div className="ring two bg-lite-violet dark:bg-[#5DC8B2]"></div>
            <div className="ring three bg-lite-violet dark:bg-[#5DC8B2]"></div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    );
  }
}

export default App;
