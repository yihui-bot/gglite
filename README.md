# gglite

> **Experimental** — this package is still under active development. The API
> may change. Feedback welcome!

An R package for interactive data visualization using the
[AntV G2](https://g2.antv.antgroup.com/) JavaScript library, with a
[Grammar of Graphics](https://www.springer.com/gp/book/9780387245447)-style
API inspired by ggplot2.

## Install

```r
install.packages('gglite', repos = 'https://yihui.r-universe.dev')
```

## Examples

Scatter plot — specify aesthetics with a formula:

```r
library(gglite)
g2(mtcars, hp ~ mpg)
```

Color and size channels:

```r
g2(iris, Sepal.Length ~ Sepal.Width, color = ~Species, size = ~Petal.Length)
```

Facet by a categorical variable:

```r
g2(iris, Sepal.Length ~ Sepal.Width | Species)
```

Bar chart with a dark theme:

```r
g2(mtcars, ~cyl) |> theme_dark()
```

Add a title, tweak scales, and chain components:

```r
g2(mtcars, hp ~ mpg) |>
  scale_x(type = 'log') |>
  title_('Motor Trend Cars') |>
  theme_classic()
```

Charts render in R Markdown, [litedown](https://github.com/yihui/litedown),
Shiny, and standalone HTML previews (`print()` opens the browser).

