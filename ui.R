ui <- fluidPage(
  useShinyjs(),
  mainPanel(
    actionButton("loadButton", "Load CanvasJS"),
    tags$div(id = "chartContainer", style = "height: 300px; width: 100%;"),
    tags$div(id = "timeToRender"),
    tags$script(src = "canvasjs_custom.js")
  )
)