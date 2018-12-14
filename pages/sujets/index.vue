<template>
  <section class="container">
    <div>

      <strong>Exercice 1  6 points</strong>
      <strong>Commun  à tous les candidats</strong><br>

<br>

<em>Les parties </em> A <em>et</em>   B <em>peuvent être traitées de façon indépendante.</em><br>

<br>


Dans une usine, un four cuit des céramiques à la température de 1000 &deg;  C. À la fin de la
cuisson, il est éteint et il refroidit.<br>

<br>

On s'intéresse à la phase de refroidissement du four, qui débute dès l'instant où il est éteint.<br>


La température du four est exprimée en degré Celsius ( &deg; C).<br>

<br>

La porte du four peut être ouverte sans risque pour les céramiques dès que sa température est
inférieure à $70$ &deg; C. Sinon les céramiques peuvent se fissurer, voire se casser.<br>

<br>

<strong>Partie A</strong><br>

<br>

Pour un nombre entier naturel $n$, on note $T_n$ la température en degré Celsius du four au bout
de $n$ heures écoulées à partir de l'instant où il a été éteint. On a donc $T_0 = 1000$.<br>

La température $T_n$ est calculée par l'algorithme suivant :<br>

<div class="text-center">

\begin{tabularx}{0.35\linewidth}{|X|}\hline
$T \gets 1000$\\
Pour $i$ allant de $1$ à $n$\\
$T \gets 0,82 \times T + 3,6$\\
Fin Pour\\\hline
\end{tabularx}
</div>


<ol >
<li> Déterminer la température du four, arrondie à l'unité, au bout de $4$ heures de
refroidissement.
</li><li>  Démontrer que, pour tout nombre entier naturel $n$, on a : $T_n = 980 \times 0,82^n + 20$.
<li>  Au bout de combien d'heures le four peut-il être ouvert sans risque pour les céramiques ?
</li>
</ol>
<strong>Partie B</strong><br>

<br>

Dans cette partie, on note $t$ le temps (en heure) écoulé depuis l'instant où le four a été éteint.<br>

La température du four (en degré Celsius) à l'instant $t$ est donnée par la fonction $f$ définie,
pour tout nombre réel $t$ positif, par :<br>

\[f(t) = a\text{e}^{- \frac{t}{5}} + b,\]<br>

où $a$ et $b$ sont deux nombres réels.<br>

On admet que $f$ vérifie la relation suivante : $f'(t) + \dfrac{1}{5}f(t) = 4$.<br>

<ol >
<li> Déterminer les valeurs de $a$ et $b$ sachant qu'initialement, la température du four est de
$1000$ &deg;  C, c'est-à-dire que $f(0) = 1000$.
</li>  Pour la suite, on admet que, pour tout nombre réel positif $t$:<br>

\[f(t) = 980\text{e}^{- \frac{t}{5}} + 20.\]<br>

<br>

<ol type ="a" >
<li> Déterminer la limite de $f$ lorsque $t$ tend vers $+ \infty$.</li>
<li> Étudier les variations de $f$ sur $[0;+ \infty[$.<br>

En déduire son tableau de variations complet.</li>
<li> Avec ce modèle, après combien de minutes le four peut-il être ouvert sans risque pour
les céramiques ?</li>
</ol>
</ol>

    </div>
  </section>
</template>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
</style>

<script>
import ButtonBackToTop from '~/components/ButtonBackToTop/ButtonBackToTop.vue'
export default {
components: {
  ButtonBackToTop
}
}
</script>

