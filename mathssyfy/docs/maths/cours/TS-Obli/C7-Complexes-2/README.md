---
sidebar: auto
author: David Couronné
---


## Module et argument d'un nombre complexe

### Définition géométrique

::: warning Définition 

Soit $z$ un complexe. $M$ (ou $\overrightarrow{w}$) un point (ou un vecteur)

d'affixe $z$.

+  On appelle **module** de $z$ la distance $OM$ (ou la norme $||\overrightarrow{w}||$). Le module de $z$ est noté $|z|.$

+  Si $z\neq 0$, on appelle **argument**
de $z$ une mesure en radians de l'angle
$\left( \overrightarrow{u};\overrightarrow{OM}\right)$ ( ou $\left( \overrightarrow{u} ;\overrightarrow{w} \right)$).

Un argument de $z$ est noté $\arg (z).$

+  Le complexe nul  n'a pas d'argument et a pour module 0.


:::

::: tip Remarque 

$\arg(z)$ peut prendre une infinité de valeurs différentes : si $\theta$ est une mesure de $\arg(z)$ alors $\theta +k 2 \pi$  est une autre mesure de $\arg(z)$ pour  $k\in \Z$. On notera : $\arg(z)=\theta\ [2\pi]$ et on dit que l'argument de $z$ vaut $\theta$  «  modulo $2\pi$ » \ou  «  à $2\pi$ près  » .
:::

::: tip Exemples

+  $|i|=OV=1$ et $\arg (i )=\left( \overrightarrow{u} ;\overrightarrow{OV} \right)=\dfrac{\pi}{2}$.

+  Soit $M_1$ d'affixe $-4$ on a ; $|-4|=OM_1=4$ et  $\arg(-4)=\left( \overrightarrow{u} ;\overrightarrow{OM_1} \right)=\pi$.

+  Soit $M_2$ d'affixe $1+i$ on a :

$|1+i|=OM_2=\sqrt{1^2+1^2}=\sqrt{2}$ d'après la formule des distances

$\arg(1+i)=\left( \overrightarrow{u} ;\overrightarrow{OM_2} \right)=\dfrac{\pi}{4}$ la diagonale du carré $OUM_2V$ étant la bissectrice de $\left( \overrightarrow{u} ;\overrightarrow{v} \right)$.

:::

::: tip Méthode [ Déterminer un ensemble de points ]

**Exercice:**

Déterminer dans le repère orthonormé $(O\ ;\overrightarrow{u} ,\overrightarrow{v} )$ l'ensemble des points $M$ d'affixe $z$ tels que :


1.   $|z|=3$

2.  $\arg(z)=-\dfrac{\pi}{3}\ [2\pi]$


**Correction**

1.  $|z|=3 \ \iff \ OM=3$.

Donc l'ensemble des points $M$ tel que $|z|=3$ est un cercle de centre $O$ et de rayon 3.

2.  $\arg(z)=-\dfrac{\pi}{3}\ [2\pi] \Longleftrightarrow \left( \overrightarrow{u} ;\overrightarrow{OM} \right)=-\dfrac{\pi}{3}\ [2\pi]$.

Donc  l'ensemble des points $M$ tel que $\arg(z)=-\dfrac{\pi}{3}\ [2\pi]$ est une demi-droite d'origine $O$, privé de $O$, de vecteur directeur $\overrightarrow{u_1}$ tel que $\left( \overrightarrow{u} ;\overrightarrow{u_1} \right)=-\dfrac{\pi}{3}\ [2\pi]$.

:::

 ### Calcul algébrique du module et d'un argument

::: warning Théorème 
Soit $z=a+i b$ un complexe.

+   $|z|=\sqrt{z\times \bar{z}}=\sqrt{a^2+b^2}.$

+  Si $z\neq 0$ alors $\theta=\arg(z)$ peut être déterminé par  :
$$\left\lbrace
\begin{array}{rcl}
\cos (\theta)&=&\dfrac{a}{|z|}  \\
\sin (\theta)&=&\dfrac{b}{|z|}\\
\end{array}\right.
$$

:::

::: tip Méthode [Déterminer le module et un argument  d'un nombre complexe  ]

**Exercice:**

Déterminer le module et un argument du complexe  $z=-1+i \sqrt{3}$.

**Correction**

1.  On calcule d'abord le module  : $|z|=\sqrt{(-1)^2+(\sqrt{3})^2}=2.$

2.  On cherche donc $\theta=\arg(z)$ tel que 
$$\left\lbrace
\begin{array}{rcl}
\cos(\theta)&=&\dfrac{-1}{2} \\
\sin(\theta)&=&\dfrac{\sqrt{3}}{2}\\
\end{array}\right.
$$

$$\cos(\theta)=\dfrac{-1}{2}\ \iff\ \cos\left(\theta\right)=\cos\left(\dfrac{2\pi}{3}\right)\Longleftrightarrow
\left\lbrace
\begin{array}{rcl}
\theta&=&\dfrac{2\pi}{3} [2\pi]\\
\text{ou}& & \\
\theta&=& -\dfrac{2\pi}{3} [2\pi]\\
\end{array}\right.
$$

Or $\sin(\theta)>0$ donc $\arg(z)=\theta=\dfrac{2\pi}{3}$ $[2\pi]$.

:::

### Égalité de deux nombres complexes par module et argument

::: warning Théorème 
Deux nombres complexes non nuls sont égaux si et seulement si ils ont même module et même argument.
:::

::: tip Preuve 
La preuve résulte directement des  formules précédentes.
:::

::: tip Remarques 

+  $|z|=0\ \iff\ z=0$.

+  $z\in \R\ \iff \ \arg(z)=0 \ \text{ou} \ \pi \  [2\pi] \ \text{ou} \ z=0.$

+  $z \ \text{est un imaginaire pur}\ \iff\ \arg(z)= \dfrac{\pi}{2} \ [2\pi] \ \text{ou} \ z=0.$

+  Attention, pour l'égalité des arguments, il faut la penser  « à $2\pi$ »  près.

::: 

## Forme trigonométrique d'un nombre complexe

### Définition

::: warning Définition 
Tout nombre complexe non nul peut s'écrire sous la forme
$z=r(\cos (\theta)+i \sin(\theta))$  avec $r=|z|$ et $\theta=\arg (z)$ $[2\pi]$.

Cette forme s'appelle **forme trigonométrique** de $z$.
:::

::: tip Remarques 

1.  Dans l'écriture sous forme trigonométrique, on peut remplacer $\theta$ par n'importe quelle valeur $\theta+k2\pi$, $k$ entier relatif.

2.  **ATTENTION** dans l'écriture $z=r(\cos (\theta)+i \sin(\theta))$ il est crucial d'avoir $r>0$.

Par exemple : $z=-2\left(\cos\left(\dfrac{\pi}{6}\right)+ i \sin\left(\dfrac{\pi}{6}\right)\right)$ n'est pas une forme trigonométrique car $-2$ n'est pas strictement positif.

:::

### Passage d'une forme à l'autre

::: warning Théorème 
Soit $z$ un complexe non nul. $z=a+i b=r\left(\cos (\theta)+i \sin(\theta)\right)$

$$
\left\lbrace
\begin{array}{rcl}
|z|&=&\sqrt{a^2+b^2}\\
\cos (\theta)&=&\dfrac{a}{|z|}  \\
\sin (\theta)&=&{\dfrac{b}{|z|}}\\
\end{array}\right.
\Longleftrightarrow
\left\lbrace
\begin{array}{rcl}
a&=&r\cos (\theta) \\
b&=&r\sin (\theta)\\
\end{array}\right.
$$
:::

::: tip Remarque 
Pour déterminer la forme trigonométrique  $z=r(\cos (\theta)+i \sin(\theta))$ d'un complexe, on reprend la méthode pour la détermination de $r$ et de $\theta$.
:::


 
## Module argument et opérations avec les nombres complexes

Dans  les deux théorèmes qui suivent $z$ et $z'$ sont des nombres complexes.

::: warning Théorème 
1. $z\neq 0$ : $\left|\dfrac{1}{z}\right|=\dfrac{1}{|z|}$

 $\arg\left(\dfrac{1}{z}\right)=-\arg(z)$ $[2\pi]$
 2. $z'\neq 0$ : $\left|\dfrac{z}{z'}\right|=\dfrac{|z|}{|z'|}$
   
 $\arg\left(\dfrac{z}{z'}\right)=\arg(z)-\arg(z')$ $[2\pi]$ pour $z\neq 0$
:::

::: tip Preuve 

1.  Ce point a été déjà prouvé  précédemment.

2.  Il suffit d'utiliser la propriété de symétrie par rapport à l'origine.

3.  De même avec la symétrie par rapport l'axe des ordonnées.

4. 
Si $z=0$ ou $z'=0$, alors $|z z'|=0$ et $|z| |z'|=0$ d'où l'égalité.

Si $z,z'\in \C^*$ alors :
$z=r(\cos(\theta)+i \sin(\theta))$ et $z=r'(\cos(\theta')+i \sin(\theta'))$.

$z z'=rr'(\cos(\theta) \cos(\theta')-\sin(\theta) \sin(\theta')+i (\cos(\theta) \sin(\theta')+\cos(\theta') \sin(\theta))$.

Ce qui donne d'après les formules d'addition pour sinus et cosinus :  
$$zz'=rr' (\cos(\theta+\theta')+i \sin(\theta+\theta')).$$

Or, $rr'>0$ donc $zz'=rr'=|z||z'|$ et $\arg(zz')=\theta+\theta'=\arg(z)+\arg(z')$ $[2\pi].$
Ce qui prouve bien le point 4).

5.  Ces égalités se montrent par récurrence.

:::
::: warning Théorème 
1. $z\neq 0$ : $\left|\dfrac{1}{z}\right|=\dfrac{1}{|z|}$ & $\arg\left(\dfrac{1}{z}\right)=-\arg(z)$ $[2\pi]$
2. $z'\neq 0$ : $\left|\dfrac{z}{z'}\right|=\dfrac{|z|}{|z'|}$ & $\arg\left(\dfrac{z}{z'}\right)=\arg(z)-\arg(z')$ $[2\pi]$ pour $z\neq 0$
:::
::: tip Preuve 

1.  $z$ est un complexe non nul. On a $z\times \dfrac{1}{z}=1$ qui donne
d'une part $\left|z\times \dfrac{1}{z}\right|=1$ c'est-à-dire $|z|\times \left|\dfrac{1}{z}\right|=1$. Et enfin $\left|\dfrac{1}{z}\right|= \dfrac{1}{|z|}$.

D'autre part, $\arg\left(z\times \dfrac{1}{z}\right)=\arg(1) [2\pi]$ donne $\arg(z)+\arg\left(\dfrac{1}{z}\right)=0 [2\pi]$.

On en conclut le point 1).

2.  $z$ et $z'$ deux complexes avec $z'\neq 0$

$\left|\dfrac{z}{z'}\right|=\left|z\times \dfrac{1}{z'}\right|=|z|\times \left|\dfrac{1}{z'}\right|=|z|\times\dfrac{1}{|z'|}=\dfrac{|z|}{|z'|}$

et si $z\neq 0$ : $\arg\left(\dfrac{z}{z'}\right)=\arg\left(z\times \dfrac{1}{z'}\right)=\arg(z)+\arg\left(\dfrac{1}{z'}\right)=\arg(z)-\arg(z')$ $[2\pi]$.

:::

::: tip Méthode [Comment utiliser les propriétés des modules et arguments ]

**Exercice:**

1.  $z_1=-\sqrt{3}+i$ et $z_2=\dfrac{1}{6}-\dfrac{\sqrt{3}}{6}i$ deux nombres complexes. Déterminer le module et un argument de $z_1z_2$.

2.  Déterminer la forme algébrique de $\left(-\dfrac{1}{2}+\dfrac{\sqrt{3}}{2} i \right)^{2016}.$

**Correction**


1.  $|z_1|=\sqrt{3+1}=2$ et $|z_2|=\sqrt{\dfrac{1}{36}+\dfrac{3}{36}}=\dfrac{1}{3}$.
Donc : $|z_1z_2|=|z_1||z_2|=2\times \dfrac{1}{3}=\dfrac{2}{3}.$

2.  $\theta_1=\arg(z_1)$ est tel que
$$
\left\lbrace
\begin{array}{rcl}
\cos(\theta_1)&=&\dfrac{-\sqrt{3}}{2} \\
\sin(\theta_1)&=&\dfrac{1}{2}\\
\end{array}\right.
$$

$\sin(\theta_1)=\dfrac{1}{2} \Longleftrightarrow \theta_1=\dfrac{\pi}{6}\ [2\pi] \ \text{ou} \ \dfrac{5\pi}{6}\ [2\pi]$, or $\cos(\theta_1)<0$ donc $\theta_1= \dfrac{5\pi}{6} [2\pi]$

$\theta_2=\arg(z_2)$ est tel que
$$
\left\lbrace
\begin{array}{rcl}
\cos(\theta_2)&=&\frac{\dfrac{1}{6}}{\dfrac{1}{3}} \\

\sin(\theta_2)&=&\frac{\dfrac{\sqrt{3}}{6}}{\dfrac{1}{3}}\\

\end{array}\right.
\Longleftrightarrow
\left\lbrace
\begin{array}{rcl}
\cos(\theta_2)&=&\dfrac{1}{2} \\
\sin(\theta_2)&=&\dfrac{\sqrt{3}}{2}\\
\end{array}\right.
$$

$\cos(\theta_2)=\dfrac{1}{2} \Longleftrightarrow \theta_2=\dfrac{\pi}{3} [2\pi] \ \text{ou} \ \dfrac{-\pi}{3} [2\pi]$, or $\sin(\theta_2)>0$ donc $\theta_2= \dfrac{\pi}{3} [2\pi].$

Donc : $\arg(z_1z_2)=\arg(z_1)+\arg(z_2)=\dfrac{5\pi}{6}+\dfrac{\pi}{3}=\dfrac{7\pi}{6}$ $[2\pi].$

1.  On remarque :
$z=-\dfrac{1}{2}+ \dfrac{\sqrt{3}}{2}i=-3z_2$ et donc :
$$|z|=3\times |z_2|=1 \text{ et }  \arg(z)=\arg(z_2)+\pi [2\pi]= -\frac{2\pi}{3} [2\pi] $$
$\arg\left(z^{2016}\right)=2016 \times \arg(z) = 2016\times \dfrac{2\pi}{3} [2\pi]=672 \times 2\pi [2\pi]=0 [2\pi]$.

De plus $|z|=1$ donc $\left|z^{2016}\right|=|z|^{2016}=1.$

On en déduit : $z^{2016}=1\times(\cos(0)+i\sin(0))=1.$

:::

## Applications des nombres complexes à la géométrie

::: warning Théorème 

+  Soient $A$ et $B$ deux points distincts d'affixes respectives $z_A$ et $z_B$.

$AB=||\overrightarrow{AB} ||=|z_B-z_A|$ et $\arg(z_B-z_A)=\left( \overrightarrow{u};\overrightarrow{AB} \right)$ $[2\pi]$.

+  Soient $A$, $B$, $C$ et $D$ quatre points distincts d'affixes respectives $z_A$,  $z_B$, $z_C$ et $z_D$.

$\arg\left(\dfrac{z_D-z_C}{z_B-z_A}\right)=\left( \overrightarrow{AB};\overrightarrow{CD}\right)$ $[2\pi]$.

:::

::: tip Preuve 

+  Soient $A$ et $B$ deux points distincts d'affixes respectives $z_A$ et $z_B$.

Il existe un unique point $M$ d'affixe $z$ tel que $\overrightarrow{OM}=\overrightarrow{AB}$. Les  affixes de ces deux vecteurs sont donc égales ce qui donne : $z=z_B-z_A$.

On en déduit que $|z|=|z_B-z_A|$ et $\arg(z)=\arg(z_B-z_A) [2\pi]$.

Donc $OM=AB=|z_B-z_A|$ et $\left( \overrightarrow{u} ;\overrightarrow{OM} \right)=\left( \overrightarrow{u};\overrightarrow{AB} \right)=\arg(z_B-z_A) [2\pi]$.

+  Soient $A$, $B$, $C$ et $D$ quatre points distincts d'affixes respectives $z_A, z_B, z_C$ et $z_D$.

Par les propriétés de l'argument on a :
$$\arg\left(\dfrac{z_D-z_C}{z_B-z_A}\right)=\arg(z_D-z_C)-\arg(z_B-z_A).$$
Ce qui donne par définition de l'argument :
$$\arg\left(\dfrac{z_D-z_C}{z_B-z_A}\right)=\left( \overrightarrow{u};\overrightarrow{CD}\right)-\left( \overrightarrow{u};\overrightarrow{AB}\right)$$
$$=\left( \overrightarrow{AB};\overrightarrow{u}\right)+\left( \overrightarrow{u} ;\overrightarrow{CD} \right)=\left( \overrightarrow{AB} ;\overrightarrow{CD} \right) [2\pi]$$
la dernière égalité résultant de la relation de Chasles pour les angles de vecteurs.

:::

::: tip Méthode [Ensembles de points ]

**Exercice:**

Dans chacun des cas suivants, déterminer l'ensemble des points $M$ d'affixe $z$ satisfaisant la condition :

+  $|z+1-i|=3.$

+  $|z-3|=|z+2+3i|.$

+  $\arg(z-1-i)=\dfrac{\pi}{4} [2\pi].$

+  $\arg\left(\dfrac{z-1+2i}{z+1}\right)=\dfrac{\pi}{2}[\pi].$

**Correction**

+  $|z+1-i|=3 \Longleftrightarrow |z-(-1+i)|=3 \Longleftrightarrow AM=3$ avec  $A$  point d'affixe $z_A=-1+i$.

Donc $M$ appartient au cercle de centre $A\left({-1};{1}\right)$ et de rayon 3.

+  $|z-3|=|z+2+3i| \Longleftrightarrow |z-3|=|z-(-2-3i)|  \Longleftrightarrow BM=CM$ avec $B$ d'affixe $z_B=3$ et $C$ d'affixe $z_C=-2-3i$.

Donc $M$ appartient à la médiatrice de $[BC]$.

+  $\arg(z-1-i)=\dfrac{\pi}{4} [2\pi] \Longleftrightarrow \arg(z-(1+i))=\dfrac{\pi}{4} [2\pi] \Longleftrightarrow  \left( \overrightarrow{u} ;\overrightarrow{EM} \right)=\dfrac{\pi}{4} [2\pi]$ avec $E$ d'affixe $z_E=1+i$.

Donc $M$ appartient à la demi-droite d'origine $E$ privé de $E$, de vecteur directeur $\overrightarrow{u_1} }$ tel que $\left( \overrightarrow{u} ;\overrightarrow{u_1} \right)=\dfrac{\pi}{4}$.

+   $\arg\left(\dfrac{z-1+2i}{z+1}\right)=\dfrac{\pi}{2}\ [\pi] \Longleftrightarrow \left( \overrightarrow{GM} ;\overrightarrow{FM} \right)=\dfrac{\pi}{2}[\pi]$ avec $F$ d'affixe $z_F=1-2i$ et $G$ d'affixe $z_G=-1$.

Donc $M$ appartient au cercle de diamètre $[FG]$ privé des points $F$ et $G$.

:::

::: tip Remarques 

1.  Trois points distincts sont alignés si et seulement si : $\left( \overrightarrow{AB} ;\overrightarrow{AC} \right)=0\ [\pi]$ ce  qui équivaut à :

$\arg\left(\dfrac{z_C-z_A}{z_B-z_A}\right)=0\ [\pi]
\Longleftrightarrow \dfrac{z_C-z_A}{z_B-z_A}$ est un réel non nul.

2.  Un triangle $ABC$ est rectangle en $A$ si et seulement si : $\widehat{\left( \overrightarrowAB} };\overrightarrowAC} }\right)}=\dfrac{\pi}{2} [\pi] $;
c'est-à-dire :

$\arg\left(\dfrac{z_C-z_A}{z_B-z_A}\right)=\dfrac{\pi}{2}\ [\pi]$ et $B\neq A$ et $C\neq A$ $\Longleftrightarrow \dfrac{z_C-z_A}{z_B-z_A}$ est un imaginaire pur non nul.

:::

::: tip Méthode [Nombres complexes et configurations géométriques ]

**Exercice:**

$A, B, C$ trois points d'affixes respectives : $z_A=2 i$, $z_B=2+i$, $z_C=1-i$.

Démontrer que le triangle $ABC$ est isocèle rectangle en $B$.

**Correction**

$AB=|z_B-z_A|=|2-i|=\sqrt{2^2+(-1)^2}=\sqrt{5}$ et
$BC=|z_C-z_B|=|-1 -2i|=|1+2i|=\sqrt{5}$ donc $ABC$ isocèle en
$B$. D'autre part :
 $$ 
\dfrac{z_A-z_B}{z_C-z_B}=\dfrac{-2+i}{-1-2i}=\dfrac{(-2+i)(-1+2i)}{1+4}=-i.
 $$ 

Donc $\left( \overrightarrow{BA} ;\overrightarrow{BC} \right)=\arg\left(\dfrac{z_A-z_B}{z_C-z_B}\right)=\arg(i)=\dfrac{\pi}{2}\ [2\pi]$ donc $ABC$ est rectangle en $B$.

:::

## Forme exponentielle

Soit $f$ la fonction définie sur $\R$ par : $f(\theta)=\cos(\theta)+i \sin(\theta)$.

$f(\theta)$ est un nombre complexe de module 1 et d'argument $\theta$.
Grâce aux formules d'addition pour le sinus et le cosinus on montre que :
$$ f(\theta+\theta')=f(\theta)\times f(\theta'),$$
ce qui est la propriété fondamentale de la fonction exponentielle dans $\R$.
Comme de plus $f(0)=1$,

on convient de noter par analogie : $\cos(\theta)+i\sin(\theta)=e^{i\theta}$.

### Ecriture exponentielle des complexes de module 1

::: warning Définition 
Tout nombre complexe de module 1 et d'argument $\theta$ peut s'écrire sous la forme :

$\cos(\theta)+i\sin(\theta)=e^{i\theta}.$

:::

::: tip Exemples



1.  Placer  sur le cercle trigonométrique  les points $M_i$ d'affixes $z_i$  tels que :
    
    $z_1=e^{i\frac{\pi}{{2}}}$;  $z_2=e^{i\pi}$;  $z_3=e^{i\frac{3\pi}{2}}$;  $z_4=e^{i2\pi}$; 
    $z_5=e^{i\frac{2\pi}{3}}$.

2.  La forme algébrique des complexes précédents est :

$z_1=e^{i\frac{\pi}{2}}=\cos\left(\frac{\pi}{2}\right) +i \sin\left(\frac{\pi}{2}\right) =i$;

$z_2=e^{i\pi}=\cos(\pi)+i \sin(\pi)=-1$;

$z_3=e^{i\frac{3\pi}{2}}=\cos\left(\frac{3\pi}{2}\right) +i \sin\left(\frac{3\pi}{2}\right) =-i$;

$z_4=e^{i2\pi}=\cos(2\pi)+i \sin(2\pi)=1$;

$z_5=e^{i\frac{2\pi}{3}}=\cos\left(\frac{2\pi}{3}\right) +i \sin\left(\frac{2\pi}{3}\right) =-\frac{1}{2}+i \frac{\sqrt{3}}{2}$.

:::

### Cas général

::: warning Définition 
Tout complexe $z\neq 0$  s'écrit sous la forme $z=re^{i\theta}$ avec $r=|z|$ et $\theta\equiv \arg(z) [2\pi].$

Cette écriture est appelée  «  **forme exponentielle du complexe** $z$ » .

Réciproque : Si $z\in \mathbb{C}^*$ et $z=re^{i\theta}$ avec $r>0$ alors $r=|z|$ et $\theta=\arg(z) [2\pi].$
:::

::: tip Remarque 
Pour déterminer la forme exponentielle d'un complexe $z$, on reprend la

méthode  pour la détermination de $r$ et de $\theta$.
:::

::: tip Exemples

1.  Déterminons la forme exponentielle de $z_1=-2i$ et
$z_2=1+i$.

On peut déterminer le module et un argument par la méthode
précédemment donnée mais on peut aussi opérer de la manière
suivante :
$$z_1=-2i=2(-1+0i)=2\left(\cos\left(\frac{-\pi}{2}\right)+i\sin\left(\frac{-\pi}{2}\right)\right)=2e^{-i\frac{\pi}{{2}}} $$
$$ z_2=1+i= \sqrt{2}\left(\frac{1}{\sqrt{2}}+i \frac{1}{\sqrt{2}}\right)=\sqrt{2}\left(\cos\left(\frac{\pi}{4}\right)+i\sin\left(\frac{\pi}{4}\right)\right)=\sqrt{2}e^{i\frac{\pi}{4}}.$$

2.  Déterminons la forme algébrique de $z_3=4e^{i\frac{2\pi}{3}}$ :
$$z_3=4\left(\cos\left(\frac{2\pi}{3}\right)+i \sin\left(\frac{2\pi}{3}\right)\right)
=4\left(-\frac{1}{2}+\frac{\sqrt{3}}{2}i\right)=-2+2i \sqrt{3}.$$

:::

### Calculs avec la notation exponentielle

::: warning Théorème 
Pour tous nombres réels $\theta_1$, $\theta_2$ :


1.  $e^{i\theta_1}\times e^{i\theta_2} =e^{i(\theta_1+\theta_2)}$

2.   $\left(e^{i\theta_1}\right)^n=e^{i n\theta_1},\ \ n\in \Z$

3.  $\dfrac{1}{e^{i\theta_1}}=e^{-i\theta_1}=\overline{e^{i\theta_1}}$

4.  $\dfrac{e^{i\theta_1}}{e^{i\theta_2}} =e^{i(\theta_1-\theta_2)}$

:::

::: tip Remarques 

+  Ces propriétés sont admises. Elles résultent du fait que $|e^{i\theta}|=1$ et des propriétés des arguments.

+  La propriété 2) s'appelle _formule de Moivre_ quand on l'écrit sous la forme

$$(\cos \theta + i\sin \theta)^n = \cos(n\theta)+i\sin(n\theta), n\in\Z$$

:::

::: tip Méthode [Utilisation de la forme exponentielle ]

**Exercice:**

1.  Mettre sous forme exponentielle :
$z_1=-\sqrt{3}+i$,

$z_2=e^{-i\frac{\pi}{6}} z_1^2$,


$z_3= \dfrac{2z_1}{e^{-i \frac{\pi}{6}}}$.

1.  Déterminer les entiers $n$ tels que $\left(-z_1\right)^n$ est un nombre réel.

2.  Soit  $Z=\dfrac{1+i}{\sqrt{6}+i\sqrt{2}}$ un complexe.

a)  Déterminer la forme exponentielle du complexe $Z$.

b)  Déterminer la forme algébrique du complexe $Z$. En déduire les valeurs exactes de $\cos\left(\dfrac{\pi}{12}\right)$ et $\sin\left(\dfrac{\pi}{12}\right)$.

**Correction**

1.  En employant la méthode on trouve 
$|z_1|=2$ puis $\arg(z_1)=\dfrac{5\pi}{6}\ [2\pi]$.
Donc $z_1= 2 e^{i\frac{5\pi}{6}}$.

On en déduit : 

$$z_2=e^{-i\frac{\pi}{6}} \times \left( 2e^{i\frac{5\pi}{6}}\right)^2=
4 e^{-i\frac{\pi}{6}} \times e^{\frac{2\times 5\pi}{6}}=
4ie^{i\frac{9\pi}{6}}=4e^{i\frac{3\pi}{2}}=-4i$$

et 

$$z_3=\dfrac{2\times2e^{i\frac{5\pi}{6}}}{5e^{-i\frac{5\pi}{6}}}=\dfrac{4}{5}
e^{i\left(\frac{5\pi}{6}+\frac{\pi}{6}\right)}=\dfrac{4}{5}e^{i\pi}=-\dfrac{4}{5}.$$

2.  $z_1=2e^{-i\frac{\pi}{6}}$ et donc  
$$\left(-z_1\right)^n=\left(2 e^{i\frac{-\pi}{6}}\right)^n=2^n
e^{i\frac{-n\pi}{6}}.$$

$(-z_1)^n$ est réel  
$\Longleftrightarrow \frac{-n\pi}{6}=0 [\pi]\Longleftrightarrow$ il existe  $k\in\Z$ tel que $\frac{-n\pi}{6}=k\pi\Longleftrightarrow n=-6k$. Donc $\left(-z_1\right)^n$ est réel si et seulement si $n$ est un multiple de 6.

1. 

a)  On a : $1+i=\sqrt{2}e^{i\frac{\pi}{4}}$ et $\sqrt{6}+i\sqrt{2}=2\sqrt{2}e^{i\frac{\pi}{6}}$ donc

$$Z=\dfrac{1+i}{\sqrt{6}+i\sqrt{2}}=
\dfrac{\sqrt{2}e^{i
\frac{\pi}{4}}}{2\sqrt{2}e^{i
\frac{\pi}{6}}}=\dfrac{1}{2}e^{i\left(\frac{\pi}{4}-
\frac{\pi}{6}\right)}=\dfrac{1}{2}e^{i\frac{\pi}{12}}$$
 est la forme exponentielle de $Z$.

b)  $Z=\dfrac{(1+i)(\sqrt{6}-i\sqrt{2})}{8}=\dfrac{\sqrt{6}+\sqrt{2}}{8}+i \dfrac{\sqrt{6}-\sqrt{2}}{8}$ est la forme algébrique de $Z$.

On a donc : $\dfrac{1}{2}e^{i\frac{\pi}{12}}=\dfrac{\sqrt{6}+\sqrt{2}}{8}+i \frac{\sqrt{6}-\sqrt{2}}{8}$.

D'où : $\dfrac{1}{2}\left(\cos\left(\frac{\pi}{12}\right)+i \sin\left(\frac{\pi}{12}\right)\right)=\frac{\sqrt{6}+\sqrt{2}}{8}+i \frac{\sqrt{6}-\sqrt{2}}{8}$.

On en déduit : $\cos\left(\frac{\pi}{12}\right)=\dfrac{\sqrt{6}+\sqrt{2}}{4}$ et $\sin\left(\frac{\pi}{12}\right)=\dfrac{\sqrt{6}-\sqrt{2}}{4}$.

::: 

::: tip Remarque 

La notation exponentielle permet de retrouver les formules d'addition pour le cosinus et le sinus.

:::

