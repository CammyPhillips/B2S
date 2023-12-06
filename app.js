//var viz = new tableau.Viz(placeholderDiv, url, options);

let viz;

//1. create a variable to store the placeholderDiv
const placeholderDiv = document.getElementById("VizContainer");
//2. Create a variable to store the url
const url =
  "https://public.tableau.com/shared/6HZ3CBKJQ?:display_count=n&:origin=viz_share_link";
//3. Create a variable to store the dashboard options
const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

function initViz() {
  console.log("Viz is Ready to Load");
  viz = new tableau.Viz(placeholderDiv, url, options);
}
//Listen for the conent to be loaded, when finished, load the viz

document.addEventListener("DOMContentLoaded", initViz);

//buttons
//where are my buttons?

const exportpdfbutton = document.getElementById("ExportPDF");

//Listen for buttons clicked

exportpdfbutton.addEventListener("click", exportpdffunction);

//what happens when buttons are clicked
function exportpdffunction() {
  viz.showExportPDFDialog();
}

//Make a button to export to powerpoint

//powerpoint

const exportpowerpointbutton = document.getElementById("ExportPowerPoint");

//Listen for buttons clicked

exportpowerpointbutton.addEventListener("click", exportpowepointfunction);

//what happens when buttons are clicked
function exportpowepointfunction() {
  viz.showExportPowerPointDialog();
}

//Make a button to export to image
//image

const exportimagebutton = document.getElementById("ExportImage");

//Listen for buttons clicked

exportimagebutton.addEventListener("click", exportimagefunction);

//what happens when buttons are clicked
function exportimagefunction() {
  viz.showExportImageDialog();
}

//---------------------------------------------------

//Filter range buttons
const filterButton = document.getElementById("FilterButton");
filterButton.addEventListener("click", getRangeValues);

function getRangeValues() {
  //filter range buttons

  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);

  //need to get the active sheet and then list of worksheets

  const workbook = viz.getWorkbook();
  console.log(workbook);
  const activeSheet = workbook.getActiveSheet();
  console.log(activeSheet);
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);

  const sheetToFilter = sheets[0];
  console.log(sheetToFilter);

  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("Filtered Viz"));
}
