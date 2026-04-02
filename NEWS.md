# gglite 0.1

A lightweight R interface to the
[AntV G2](https://g2.antv.antgroup.com/) JavaScript visualization library with
a ggplot2-style API. Create interactive charts using the Grammar of Graphics
with support for 35+ geometry types (marks), scales, coordinates, themes,
transforms, facets, animations, and chart components (axes, legends, titles,
tooltips, labels, sliders, and scrollbars). Renders in R Markdown, litedown,
Shiny, and standalone HTML previews.

## Ergonomic improvements inspired by [tinyplot](https://grantmcdermott.com/tinyplot/)

- Added `gg()` as a shorthand alias for `g2()`, similar to tinyplot's `plt()`
  alias for `tinyplot()`.

- Added `main` and `sub` arguments to `g2()` for setting the chart title and
  subtitle directly, like base `plot()` and tinyplot.

- Added `by` argument to `g2()` for color grouping, inspired by tinyplot's `by`
  argument. Equivalent to `color = 'column'`.

- **Breaking change:** The formula `|` operator now sets color grouping (e.g.,
  `y ~ x | Species` maps `Species` to color) instead of faceting. This aligns
  with tinyplot's formula convention, where `|` means "group by." Faceting is
  now done via the new `facet` argument.

- Added `facet` argument to `g2()` accepting a formula (`~ z` for columns,
  `y ~ x` for grid) or a character string. Inspired by tinyplot's `facet`
  argument.

- Added `alpha` argument to `g2()` for controlling mark opacity, inspired by
  tinyplot's `alpha` argument. Sets `fillOpacity` and `strokeOpacity` on all
  marks without needing `style_mark()`.

- Added `palette` argument to `g2()` for convenient color palette selection
  (e.g., `palette = 'set2'`), inspired by tinyplot's `palette` argument.
  Equivalent to `scale_color(palette = ...)`.
