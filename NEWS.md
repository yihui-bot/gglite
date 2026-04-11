# gglite 0.1

- Document that series marks (`mark_line()`, `mark_area()`) show a vertical
  crosshair by default; use `tooltip_(crosshairs = FALSE)` to suppress it.

- Fix the `crosshairsStroke` and `crosshairsLineWidth` defaults in the tooltip
  reference table (were `'#aaa'`/`2`; now show G2's actual defaults
  `'#1b1e23'`/`1`).

- Document `crosshairsStrokeOpacity` and note that the default `0.5`
  semi-transparency can make custom-colored crosshairs appear washed-out on a
  white background; use `crosshairsStrokeOpacity = 1` for fully opaque lines.

A lightweight R interface to the
[AntV G2](https://g2.antv.antgroup.com/) JavaScript visualization library with
a ggplot2-style API. Create interactive charts using the Grammar of Graphics
with support for 35+ geometry types (marks), scales, coordinates, themes,
transforms, facets, animations, and chart components (axes, legends, titles,
tooltips, labels, sliders, and scrollbars). Renders in R Markdown, litedown,
Shiny, and standalone HTML previews.
