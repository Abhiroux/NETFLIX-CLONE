import React from "react";
import "./css/Sidebar.css";
import tvIcon from "../media/tv-icon-13.png";

function Sidebar() {
  function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const iconTitles = document.querySelectorAll(".iconTitle");
    sidebar.style.transition = "all 0.5s";
    if (sidebar.style.width === "50px") {
      for (let i = 0; i < iconTitles.length; i++) {
        iconTitles[i].style.display = "inline-block";
      }
      sidebar.style.width = "250px";
    } else {
      sidebar.style.width = "50px";
      for (let i = 0; i < iconTitles.length; i++) {
        iconTitles[i].style.display = "none";
      }
    }
  }

  return (
    <>
      <div className="sidebar" id="mySidebar">
        <ul className="sidebarList">
          <li onClick={toggleSidebar}>
            <a href="#search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span className="iconTitle">Search</span>
            </a>
          </li>
          <li onClick={toggleSidebar}>
            <a href="#Home">
              <i class="fa-solid fa-house"></i>
              <span className="iconTitle">Home</span>
            </a>
          </li>
          <li onClick={toggleSidebar}>
            <a href="#tvshows">
              <img
                src={tvIcon}
                width={"20px"}
                className="tvIcon"
                alt="tv icon"
              />
              <span className="iconTitle">Web Series</span>
            </a>
          </li>
          <li onClick={toggleSidebar}>
            <a href="#Movies">
              <i class="fa-solid fa-clapperboard"></i>
              <span className="iconTitle">Movies</span>
            </a>
          </li>
          <li onClick={toggleSidebar}>
            <a href="#myList">
              <i class="fa-solid fa-plus"></i>
              <span className="iconTitle">My List</span>
            </a>
          </li>
          <li onClick={toggleSidebar}>
            <a href="#new">
              <i class="fa-solid fa-newspaper"></i>
              <span className="iconTitle">New</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <span className="hamburger">&#9776;</span> */}
    </>
  );
}

export default Sidebar;
