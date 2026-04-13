# gglite 0.1

- Renamed `header()` to `title()`, `label()` to `labels()`, and `transform_()`
  to `transform()`. The new names dispatch to `graphics::title()`,
  `base::labels()`, and `base::transform()`, respectively, when the first
  argument is not a `g2` chart object (a "poorman's S3" dispatch). Both `|>`
  and `+` operator syntax continue to work. A `conflictRules()` call in
  `.onLoad()` suppresses the package-masking messages for these names.

A lightweight R interface to the
[AntV G2](https://g2.antv.antgroup.com/) JavaScript visualization library with
a ggplot2-style API. Create interactive charts using the Grammar of Graphics
with support for 35+ geometry types (marks), scales, coordinates, themes,
transforms, facets, animations, and chart components (axes, legends, titles,
tooltips, labels, sliders, and scrollbars). Renders in R Markdown, litedown,
Shiny, and standalone HTML previews.
