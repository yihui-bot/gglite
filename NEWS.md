# gglite 0.1

- Fixed the `coordinate('parallel')` example to remove the broken `normalizeY`
  transform (which is not needed for parallel coordinates).

- Added working examples for `coordinate('radar')` and `coordinate('helix')`.

- Removed the broken `@examples` from `mark_density()` (the `kde` transform is
  not available in G2 v5) and `mark_partition()` (the `partition` mark does not
  work in G2 v5).

- Added parallel, radar, and helix sections to the coordinates example Rmd.

A lightweight R interface to the
[AntV G2](https://g2.antv.antgroup.com/) JavaScript visualization library with
a ggplot2-style API. Create interactive charts using the Grammar of Graphics
with support for 35+ geometry types (marks), scales, coordinates, themes,
transforms, facets, animations, and chart components (axes, legends, titles,
tooltips, labels, sliders, and scrollbars). Renders in R Markdown, litedown,
Shiny, and standalone HTML previews.
