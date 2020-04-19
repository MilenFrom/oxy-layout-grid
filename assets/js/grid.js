"use strict";

const purrdomTree = document.querySelector(".oxygen-toolbar-panels");
let gridStatus = false; // Is grid layout on ?
let gridContainer = false; // // Is grid container deployed ?
let gridCount = 0;
let gridWidth; // Sets the width div purrGrid

// Creates buttons inside Oxygen UI Toolbar
purrdomTree.innerHTML +=
  '<input id="purr-grid-toolbar" class="grid-layout-toggle-button " type="text" value="100%"/>' +
  '<div class="grid-layout-toggle-button" onclick="setGridLayout()"></div>';

// Checks input field for value (main value 100%) and set grid based on it
function setGridLayout() {
  gridWidth = document.getElementById("purr-grid-toolbar").value;
  gridLayout();
}

function gridLayout() {
  // Find ct-builder (Waldo)
  let purrCAV = document.getElementById("ct-artificial-viewport");
  let purrCAVO = purrCAV.contentWindow || purrCAV.contentDocument;
  let purrCTB = purrCAVO.document.getElementById("ct-builder");
  let purrDIV = document.createElement("div");
  if (!gridStatus) {
    if (!gridContainer) {
      // Insert purrContainer inside ct-builder
      purrDIV.className = "purrContainer";
      purrCTB.appendChild(purrDIV);
      // Insert style for purrContainer
      let purrContainerStyle = purrCAVO.document.getElementsByClassName(
        "purrContainer"
      )[0];
      purrContainerStyle.style.setProperty("display", "flex");
      purrContainerStyle.style.setProperty("justify-content", "center");
      purrContainerStyle.style.setProperty("width", "100%");
      purrContainerStyle.style.setProperty("position", "fixed");
      purrContainerStyle.style.setProperty("height", "100vh");
      purrContainerStyle.style.setProperty("pointer-events", "none");
      purrContainerStyle.style.setProperty("z-index", "0");
      purrContainerStyle.style.setProperty("top", "0");
      // Insert div purrGrid inside purrContainer
      let purrContainer = purrCAVO.document.querySelector(".purrContainer");
      purrDIV = document.createElement("div");
      purrDIV.className = "purrGrid";
      purrContainer.appendChild(purrDIV);
      // Insert style for purrGrid
      let purrGridStyle = purrCAVO.document.getElementsByClassName(
        "purrGrid"
      )[0];
      purrGridStyle.style.setProperty("display", "flex");
      purrGridStyle.style.setProperty("justify-content", "space-between");
      purrGridStyle.style.setProperty("width", `calc(${gridWidth} + 10px)`);
      purrGridStyle.style.setProperty("margin", "0 -5px");
      gridContainer = true;
    }
    if (gridContainer) {
      // Create 6x purrColumn inside purrGrid
      for (var i = 0; i < 6; i++) {
        let purrGridColumn = purrCAVO.document.querySelector(".purrGrid");
        purrDIV = document.createElement("div");
        purrDIV.className = "purrColumn";
        purrGridColumn.appendChild(purrDIV);
      }
      // Insert style for each purrColumn
      let purrColumnStyle = purrCAVO.document.querySelectorAll(".purrColumn");
      purrColumnStyle.forEach(pcs => {
        pcs.style.setProperty("width", "100%");
        pcs.style.setProperty("background-color", "aqua");
        pcs.style.setProperty("opacity", "35%");
        pcs.style.setProperty("margin", "0 5px");
        pcs.style.setProperty("hight", "100vh");
      });
      if (gridCount === 2) {
        // Stops creating other columns
        gridStatus = true;
        gridContainer = false;
      }
      gridCount++;
    }
  } else if (gridStatus) {
    // Remove whole grid if var gridStatus is true
    const elements = purrCAVO.document.getElementsByClassName("purrContainer");
    while (elements.length > 0) elements[0].remove();
    gridStatus = false;
    gridCount = 0;
  }
}
