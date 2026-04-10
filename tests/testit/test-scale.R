library(testit)

assert('scale_x() is shortcut for scale_(x)', {
  chart = g2() |> mark_point() |> scale_x(type = 'log')
  # scale after mark goes to mark level
  (chart$layers[[1]]$scale$x$type %==% 'log')
})
