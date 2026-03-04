# gglite 0.0.1

- Changed `g2_col_cdn()` from a function to a constant `g2_col_cdn` since the
  CDN URL is unlikely to change.

- Refactored the CDN `<script>` tags in `preview()` and `knit_print.g2()` into
  a shared helper `cdn_scripts()` to reduce code repetition.

- Added `record_print.g2()` S3 method for `xfun::record_print()` so that
  litedown can render gglite plots correctly in Rmd documents.

- Added `.github/copilot-instructions.md` for Copilot development guidance.

- Added `.github/workflows/copilot-setup-steps.yml` for Copilot environment
  setup.

- Added `.github/workflows/github-pages.yml` for building the package site with
  litedown.

- Added `examples/` directory with extensive Rmd examples for each gglite
  component (marks, scales, coordinates, themes, transforms, interactions,
  facets, animations, axes, legends, titles, tooltips, labels, styles, sliders,
  and scrollbars).
