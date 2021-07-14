import React from "react";
import "../App.css";
import Button from "./Button";
function Home() {
  return (
    <div className="home-page d-flex align-items-center">
      <div className="container-fluid ">
        <div className="section1 row">
          <div className="col-md-6 col-sm-12">
            <div class="home text-left ">
              <div class="text1">Hello, I'm</div>
              <div class="text1 my-2">Priyanka Pradhan</div>
              <div class="text1">
                I am a{" "}
                <span style={{ color: "crimson" }}>Frontend Developer</span>
              </div>
              <div className="mt-3">
                <Button text="Contact Me" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <div className="circles">
            {/* <div className="circle"></div> */}
              <div className="image">
                <img src="images/webdev.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;