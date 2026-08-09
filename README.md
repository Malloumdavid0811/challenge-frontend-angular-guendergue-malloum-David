# Challenge Frontend sur Angular

## A. Développement du composant

- Créer le composant src/components/WalletStatus.js
- Vérifier l'état de la connexion au portefeuille à l'aide du contexte/des hooks existants (voir src/context/AppContext.js)
- Afficher l'état de la connexion au portefeuille :
Connecté : Afficher l'adresse du portefeuille tronquée (0x1234...5678) et un badge vert « Connecté »
- Non connecté : Afficher un badge rouge « Non connecté »
- Utiliser les hooks useState et useEffect pour la gestion de l'état

## B. Intégration

- Ajouter la route /dashboard/wallet-status dans src/routes/routes.js
- Harmoniser les styles de src/scss et des composants de portefeuille existants

## C. Vérification

- Le composant s'affiche correctement sur la route /dashboard/wallet-status
- L'adresse du portefeuille s'affiche au format tronqué lorsque la connexion est établie
- Le badge d'état de la connexion affiche la couleur correcte (vert lorsque la connexion est établie, rouge dans le cas contraire)

## D. Mon résultat

<img width="800" height="449" alt="image" src="https://github.com/user-attachments/assets/017f29ea-5578-4ba5-8683-3f98b0076b53" />


<img width="800" height="426" alt="image" src="https://github.com/user-attachments/assets/f5de497e-63df-4709-a17b-0340ebbf92ff" />
