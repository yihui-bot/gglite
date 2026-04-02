# gglite 0.1

A lightweight R interface to the
[AntV G2](https://g2.antv.antgroup.com/) JavaScript visualization library with
a ggplot2-style API. Create interactive charts using the Grammar of Graphics
with support for 35+ geometry types (marks), scales, coordinates, themes,
transforms, facets, animations, and chart components (axes, legends, titles,
tooltips, labels, sliders, and scrollbars). Renders in R Markdown, litedown,
Shiny, and standalone HTML previews.

- Fixed `interact()` to output interaction config as a named object (e.g.,
  `{legendHighlight: true}`) instead of an array. This restores all non-default
  interactions such as `legendHighlight`, `elementHighlight`, `brushHighlight`,
  etc. (#N).

- Fixed legend title: `legend_color(title = 'text')` now correctly displays the
  title above legend items. G2's default theme hides the legend title; gglite
  now passes `showTitle = TRUE` and `titleText` to override this.

- Fixed time scale: Date and POSIXt columns are now automatically converted to
  millisecond timestamps for G2's time scale. Additionally, Date/POSIXt columns
  auto-set `scale.type = 'time'` when no explicit type is specified.

- Fixed the ordinal scale example in `scales.Rmd`: changed `type = 'ordinal'`
  to `type = 'point'` for point marks, since the ordinal scale lacks the
  padding needed to position point marks correctly in G2.
