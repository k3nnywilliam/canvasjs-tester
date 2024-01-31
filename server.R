server <- function(input, output, session) {
  observeEvent(input$loadButton, {
    # Simulate loading data from your data frame
    data <- data.frame(
      x = seq(1, 1000000, by = 1),
      y = cumsum(runif(1000000, -5, 5))
    )
    
    # Convert data to JSON
    data_json <- jsonlite::toJSON(data)
    
    # Send JSON data to JavaScript
    shinyjs::runjs(sprintf("loadCanvasJS(%s);", data_json))
  })
}