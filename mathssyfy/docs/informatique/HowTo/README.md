# Outils Dev

<ClientOnly>
  <ButtonBackToTop/>
</ClientOnly>

## Convertir du LaTeX en Markdown

En utilisant Pandoc: [Pandoc](http://pandoc.org/)

``` bash
pandoc -s file.tex -o file.md
```
::: warning Attention
Cette conversion automatique en prend pas en compte les figures (pstricks/TikZ) et les packages personnalisés.
:::

Les articles mathématiques de ce site utilisent un convertisseur LaTeX vers Markdown: [latexconvertmd](https://loving-booth-d9d454.netlify.com/)

## Installer pipenv

En ligne de commande avec privilèges administrateur:
``` bash
pip install pipenv
```

## Katex

+ Site officiel: [Katex.org](https://katex.org/)
+ Liste des commandes supportées: [Commandes LateX](https://katex.org/docs/support_table.html)
+ newcommand: [macros](https://katex.org/docs/supported.html#macros)

## Visual Studio Code Extensions

+ Python
+ Material Icon Theme
+ Markdown All in One
+ Vetur
+ Bracket Pair Colorizer (1.0.61)
+ Live Server
+ Prettier - Code formatteur

## Créer un package Python installable avec pip

Documentation officielle: [PiPy](https://packaging.python.org/tutorials/packaging-projects/)

1. Installer les dépendances (en mode adminstrateur):

``` bash
python -m pip install --user --upgrade setuptools wheel
python -m pip install --user --upgrade twine
```

2. Compiler le package
```bash
python setup.py sdist bdist_wheel
```

3. Déployer sur TestPyPi
```bash
twine upload --repository-url https://test.pypi.org/legacy/ dist/*
```

4. Installer
```bash
python -m pip install --index-url https://test.pypi.org/simple/ nom-du-package
```

## Add To PATH

``` bash
setx /M PATH "$($env:path);c:\program files\monsuperprogramme"
```