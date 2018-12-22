# Astuces diverses

## Convertir du LaTeX en Markdown

En utilisant Pandoc: [Pandoc](http://pandoc.org/)

``` bash
pandoc -s file.tex -o file.md
```
::: warning Attention
Cette conversion automatique en prend pas en compte les figures (pstricks/TikZ) et les packages personnalisés.
:::

## Installer pipenv

En ligne de commande avec privilèges administrateur:
``` bash
pip install pipenv
```